import Sharp from "sharp";
import { MongoClient } from "mongodb";
import { parallelLimit } from "async";
import chalk from "chalk";
const log = console.log;
import Request from "request-promise";
const logInfo = (msg: string) => log(chalk.blueBright(msg));
const errorInfo = (msg: string) => log(chalk.redBright(msg));
import { config } from "dotenv";

// if (process.env.NODE_ENV === "development") {
// config();
// }

interface IResponse {
  RESULT: {
    nfinfo: any;
    people: any;
    imdbinfo: any;
  };
}

export default async (
  resolve: (result: boolean) => void,
  reject: (result: boolean) => void
) => {
  try {
    const dbName = process.env.MONGO_DB_NAME as string;
    const dbUrl = process.env.MONGO_DB_URL as string;
    const apiURL = process.env.UNOGS_API_2 as string;
    const apiKey = process.env.API_KEY;

    logInfo("*********** Initializing download - Flix details **************");
    logInfo("Connecting to database");
    const client = new MongoClient(dbUrl);
    await client.connect();
    const dataBase = client.db(dbName);

    const listedCollections = await dataBase
      .listCollections({ name: "flix_details" })
      .toArray();
    const flixDetailsExists = listedCollections.some(
      x => x.name === "flix_details"
    );

    if (flixDetailsExists) {
      await dataBase.collection("flix_details").deleteMany({});
    } else {
      await dataBase.createCollection("flix_details");
    }

    logInfo("Prechecks complete. Initiating download.");

    logInfo("Get all flix entries in the database to process");

    const flixCollection = await dataBase
      .collection("flix")
      .find({})
      .toArray();

    logInfo("Starting controlled parallel requests");

    if (flixCollection) {
      parallelLimit(
        flixCollection.map(flix => async (callback: any) => {
          try {
            logInfo(`Requesting data for ${flix.netflixid}`);
            const response = await Request(
              `${apiURL}?t=loadvideo&q=${flix.netflixid}`,
              {
                headers: {
                  "X-RapidAPI-Key": apiKey as string
                }
              }
            );
            logInfo(`Results arrived for ${flix.netflixid}`);

            const {
              RESULT: { nfinfo, people, imdbinfo }
            } = JSON.parse(response) as IResponse;

            logInfo(`Preparing base64 data for flix ${flix.netflixid}`);

            if (nfinfo) {
              const ninfoImageResBuffer = await Request(nfinfo.image1, {
                encoding: null,
                strictSSL: true
              });
              const sharpImage = await Sharp(ninfoImageResBuffer)
                .resize(100, 100)
                .jpeg({
                  quality: 90
                })
                .toBuffer({ resolveWithObject: true });
              const base64 = Buffer.from(sharpImage.data).toString("base64");
              const updatedNfinfo = Object.assign({}, nfinfo, {
                base64
              });
              logInfo(`base64 processing complete for flix ${flix.netflixid}`);
              return {
                nfinfo: updatedNfinfo,
                imdbInfo: imdbinfo,
                cast: people.reduce(
                  (prev: any, current: any) => Object.assign({}, prev, current),
                  {}
                )
              };
            }
          } catch (error) {
            errorInfo(`Failed to process Image ${error}`);
          }
        }),
        10,
        (error, results) => {
          if (error) {
            errorInfo("Failed to download the data");
          } else if (results) {
            logInfo("***** All parallel results arrived ******");

            // let _results = results as Array<{ RESULT: any }>;
            let bulkUpdateOptions: any = [];
            bulkUpdateOptions=bulkUpdateOptions.concat(
              results.map(doc => ({ insertOne: { document: doc } }))
            );
            console.log(bulkUpdateOptions);
            logInfo("***** Starting Bulkwrite operation *****");
            dataBase
              .collection("flix_details")
              .bulkWrite(bulkUpdateOptions)
              .then(result => {
                logInfo("***** Completed Bulkwrite operation *****");
                bulkUpdateOptions = [];
              })
              .catch(error => {
                errorInfo("Failed to insert details");
                console.log(error);
                resolve(false);
              });
            logInfo("***** Completed Bulkwrite operation *****");
            resolve(true);
          }
        }
        );
      }
    } catch (error) {
      errorInfo(`Failed to download the flix details.`);
      console.log(error);
      resolve(false);
  }
};
