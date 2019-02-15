import { LogoWrapper } from "./../flix-ui/src/components/detail/styles/imageGallery.styles";
import Async from "async";
const MongoDB = require("mongodb");
import fetch from "node-fetch";
import { flix } from "./types";
import chalk from "chalk";
const log = console.log;

const logInfo = (msg: string) => log(chalk.blueBright(msg));
const errorInfo = (msg: string) => log(chalk.redBright(msg));

export default async (
  resolve: (result: boolean) => void,
  reject: (result: boolean) => void
) => {
  logInfo("*********** Starting Download *************");
  logInfo("Connecting to database");

  // mongo connection url
  const mongoURL = process.env.MONGO_DB_URL;
  // mongo database name
  const dbName = process.env.MONGO_DB_NAME;
  // list of countries to process
  const countriesToProcess = (process.env
    .JOB_COUNTRIES_TO_PROCESS as string).split(",");
  // third party api
  const uNoGsAPI = process.env.UNOGS_API_2;
  // no of days that we need the data
  const daysBackData = process.env.JOB_DAYSBACK_DATA;
  // api key
  const apiKey = process.env.API_KEY;
  // pages

  try {
    if (!mongoURL && !dbName) {
      throw new Error("Invalid Mongo connection details");
    }

    // connect mongo client to the DB
    const client = new MongoDB.MongoClient(mongoURL);
    await client.connect();
    const dataBase = client.db(dbName);
    logInfo("Connected to DB Successfully");

    // check if the collection exists if not create one
    const collections = await dataBase
      .listCollections({ name: "flix" })
      .toArray();
    const flixCollnIndex = collections.findIndex((x: any) => x.name === "flix");
    if (flixCollnIndex < 0) {
      await dataBase.createCollection("flix");
    } else {
      await dataBase.collection("flix").deleteMany({});
    }

    // select the flix collection
    const flixCollection = dataBase.collection("flix");
    const localFlixCollection: flix[] = [];

    // fire up multiple queries to fetch flix data for different countries
    // wait for all the requests to complete

    let completeCollection: any[] = [];

    logInfo("Prechecks complete");
    logInfo("Starting download");

    await new Promise((resolve, reject) => {
      Async.parallel(
        countriesToProcess.map((country: string) => (pCallback: any) => {
          let page = 0;
          Async.doWhilst(
            async function(callback) {
              logInfo(
                `Fetching data for ${uNoGsAPI}?q=get:new${daysBackData}:${country}&p=${page}&t=ns&st=adv}`
              );
              const response = await fetch(
                `${uNoGsAPI}?q=get:new${daysBackData}:${country}&p=${++page}&t=ns&st=adv`,
                {
                  headers: {
                    "X-RapidAPI-Key": apiKey as string
                  }
                }
              );
              const data = await response.json();
              data.ITEMS = data.ITEMS.map((x: flix) =>
                Object.assign({}, x, { country })
              );
              return data;
            },
            result => {
              const _result = result as {
                COUNT: string;
                ITEMS: any[];
              };
              completeCollection = completeCollection.concat(_result.ITEMS);
              return _result.ITEMS.length > 0;
            },
            error => {
              if (error) {
                console.log("Failed to process data");
                errorInfo("Failed to complete the download");
              }
              pCallback();
            }
          );
        }),
        (error, results) => {
          if (!error) {
            resolve(true);
          } else {
            errorInfo("Failed to complete parallel download");
          }
        }
      );
    });

    // iterate through the collection and make sure duplicate entries are removed
    // Basically if you have the same show available on multiple countries, then this function will update
    // the countries attribute.

    logInfo("Parallel download complete. Removing duplicate entries");

    completeCollection.forEach(async (flix, index) => {
      const flixIndex = localFlixCollection.findIndex(
        x => x.netflixid === flix.netflixid
      );

      // if flix already exists this means the country id need to be added
      if (flixIndex >= 0) {
        // store the flix
        let locFlix = localFlixCollection[flixIndex];
        // remove the element from the array.
        localFlixCollection.splice(flixIndex, 1);

        if (locFlix && locFlix.countries) {
          locFlix = Object.assign({}, locFlix, {
            countries: locFlix.countries.concat([flix.country])
          });
          localFlixCollection.push(locFlix);
        }
      } else {
        localFlixCollection.push(
          Object.assign({}, flix, { countries: [flix.country] })
        );
      }

      if (index === completeCollection.length - 1) {
        await flixCollection.insertMany(localFlixCollection);
        client.close();
        logInfo("Finished removing duplicates");
        resolve(true);
      }
    });
  } catch (error) {
    errorInfo("Failed to remove the duplicates");
    log(error);
    reject(false);
  }
};
