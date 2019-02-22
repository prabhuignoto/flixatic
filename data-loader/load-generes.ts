import { MongoClient } from "mongodb";
import chalk from "chalk";

const logInfo = (msg: string) => console.log(chalk.blueBright(msg));
const logError = (msg: string) => console.log(chalk.redBright(msg));

interface IResponse {
  imdbInfo: {
    genre: string;
  };
  nfinfo: {
    netflixid: string;
  };
}

const UpdateGeneres = async function(
  resolve: (res: boolean) => void,
  reject: (res: boolean) => void
) {
  try {
    logInfo("Connecting to database");
    const dbURL = process.env.MONGO_DB_URL as string;
    const dbName = process.env.MONGO_DB_NAME as string;

    const client = new MongoClient(dbURL);
    await client.connect();
    const dataBase = client.db(dbName);

    logInfo("Connected to Database");

    logInfo("Starting Bulkwrite operation");

    let response: IResponse[];

    // fetch all the genres for all the existing shows
    response = (await dataBase
      .collection("flix_details")
      .find(
        {},
        {
          fields: {
            "imdbInfo.genre": 1,
            "nfinfo.netflixid": 1
          }
        }
      )
      .toArray()) as IResponse[];

    // update the main flix table with genre info for each flix
    const bulkOpts = response
      .filter(y => !!y.imdbInfo)
      .map(x => ({
        updateOne: {
          filter: {
            netflixid: x.nfinfo.netflixid
          },
          update: {
            $set: {
              genre: x.imdbInfo.genre.split(",").map(x => x.trim())
            }
          }
        }
      }));

    await dataBase.collection("flix").bulkWrite(bulkOpts);

    logInfo("Completed Bulk write operation");

    logInfo("Populate genre collection");

    // first off check if the genre collection exists
    const resultArray = await dataBase
      .listCollections({ name: "genres" })
      .toArray();
    const genresExists = resultArray.some(x => x.name === "genres");

    if (genresExists) {
      await dataBase.collection("genres").deleteMany({});
    } else {
      await dataBase.createCollection("genres");
    }

    logInfo("Prechecks complete");
    logInfo("Computing the genre list");

    const genreMap = new Map();

    response.forEach(x => {
      let genreList =
        x.imdbInfo && x.imdbInfo.genre
          ? x.imdbInfo.genre.split(",").map(x => x.trim())
          : null;
      if (genreList) {
        genreList.forEach(genre => {
          if (!genreMap.has(genre)) {
            genreMap.set(genre, genre);
          }
        });
      }
    });

    logInfo("insert the newly generated genre list");
    await dataBase.collection("genres").insertMany(
      [...genreMap.values()].map(x => ({
        name: x
      }))
    );
    logInfo("Created the genre list");
    resolve(true);
  } catch (error) {
    logError("Failed to process genre data");
    console.log(error);
    reject(error);
  }
};

export default UpdateGeneres;
