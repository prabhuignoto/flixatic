import { flix } from "./types";
import Async from "async";
import Request from "request-promise";
import { MongoClient } from "mongodb";
import { config } from "dotenv";
import fetch from "node-fetch";

if (process.env.NODE_ENV === "development") {
  config();
}

const MongoURL = process.env.MONGO_DB_URL as string;
const apiKey = process.env.API_KEY;
const Countries = process.env.JOB_COUNTRIES_TO_PROCESS as string;

export default async () => {
  try {
    // initialize the database connection
    const client = new MongoClient(MongoURL);
    await client.connect();
    const dataBase = client.db("flix_db");

    // check if the flix collection is already present
    const flixCollnExistsResult = await dataBase
      .listCollections({ name: "flix" })
      .toArray();

    const flixDetailsExistsResult = await dataBase
      .listCollections({ name: "flix-details" })
      .toArray();

    if (flixDetailsExistsResult.indexOf("flix-details") < 0) {
      await dataBase.createCollection("flix-details");
    } else {
      await dataBase.collection("flix-details").deleteMany({});
    }

    // proceed if the flix collection is present
    if (flixCollnExistsResult.length > 0) {
      const flixCollection = await dataBase
        .collection("flix")
        .find({})
        .toArray();

      // const PromiseAllResult = await Promise.all(
      //   flixCollection.map((flix: flix) => new Promise(async (resolve: any, reject: any) => {
      //     const response = await fetch(
      //       `https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=loadvideo&q=${
      //         flix.netflixid
      //       }`,
      //       {
      //         headers: {
      //           "X-RapidAPI-Key": apiKey as string
      //         }
      //       }
      //     );
      //     const data = await response.json();
      //     resolve(data);
      //   })
      // ));
    }
  } catch (error) {
    console.log("Failed to process data");
  }
};
