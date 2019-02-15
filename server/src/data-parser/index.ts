import { config } from "dotenv";
import { MongoClient } from "mongodb";
import fetch from "node-fetch";
import errorLogger from "../loggers/error";
import { INinfo } from "../types";

interface INinfoDB extends INinfo {
  countries: string[];
}

interface IResponse {
  COUNT: string;
  ITEMS: INinfoDB[];
}

export default async function() {
  if (process.env.NODE_ENV === "development") {
    config();
  }
  // mongo connection url
  const mongoURL = process.env.MONGO_DB_URL as string;
  // mongo database name
  const dbName = process.env.MONGO_DB_NAME as string;
  // list of countries to process
  const countriesToProcess = (process.env
    .JOB_COUNTRIES_TO_PROCESS as string).split(",");
  // third party api
  const uNoGsAPI = process.env.UNOGS_API_2 as string;
  // no of days that we need the data
  const daysBackData = process.env.JOB_DAYSBACK_DATA as string;
  // api key
  const apiKey = process.env.API_KEY as string;

  try {
    if (!mongoURL && !dbName) {
      throw new Error("Invalid Mongo connection details");
    }

    const client = new MongoClient(mongoURL);
    await client.connect();
    const dataBase = client.db(dbName);
    // tslint:disable-next-line:no-console
    console.log("CONNECTED");

    const showCollection = dataBase.collection("shows");

    countriesToProcess.forEach(async (country: string) => {
      let response = [{}];
      let pages = 1;

      try {
        const dataResponse = await fetch(
          `${uNoGsAPI}?q=get:new${daysBackData}:${country}&p=${pages}&t=ns&st=adv`,
          {
            headers: {
              "X-RapidAPI-Key": apiKey,
            },
          },
        );
        const result = await dataResponse.json();
        const { ITEMS: shows } = result as IResponse;

        shows.forEach(async (show) => {
          const existingFlix = await showCollection.findOne<INinfoDB>({
            netflixid: show.netflixid,
          });
          if (existingFlix) {
            const currentCountries = existingFlix.countries;
            let updatedCountries = [];
            if (currentCountries.indexOf(country) < 0) {
              updatedCountries = currentCountries.concat([country]);
              showCollection.updateOne(
                {
                  nextflixid: existingFlix.netflixid,
                },
                {
                  countries: updatedCountries,
                },
              );
            }
          } else {
            showCollection.insertOne(
              Object.assign({}, show, {
                countries: [country],
              }),
            );
          }
        });

        response = shows;
        pages += 1;
        return country;
      } catch (error) {
        response.length = 0;
        errorLogger.log({
          level: "error",
          message: error,
        });
      }
    });

    client.close();
  } catch (error) {
    errorLogger.log({
      level: "error",
      message: error,
    });
  }
}
