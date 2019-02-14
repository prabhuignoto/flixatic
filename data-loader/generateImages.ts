const URL = require("url").URL;
import Sharp from "sharp";
import { MongoClient } from "mongodb";
import Request from "request-promise";
import { Buffer } from "buffer";
import Async from "async";
import { config } from "dotenv";
import { flix } from "./types";

if (process.env.NODE_ENV === "development") {
  config();
}

export default async (
  resolve: (result: boolean) => void,
  reject: (result: boolean) => void
) => {
  try {
    // connect to database
    const client = new MongoClient(process.env.MONGO_DB_URL as string);
    await client.connect();
    const dataBase = client.db("flix_db");

    // get all shows
    const shows = await dataBase
      .collection("flix")
      .find({})
      .toArray();

    Async.eachOfLimit(
      shows,
      5,
      async (show: flix, key: string | number) => {
        try {
          const parsedURL = new URL(show.image);
          console.log(`Parsing ${parsedURL.toString()}`);

          const responseBuffer = await Request(parsedURL.toString(), {
            encoding: null,
            strictSSL: parsedURL.protocol === "https:" ? true : false
          });

          console.log(`Generating compressed version for ${parsedURL}`);

          const sharpImage = await Sharp(responseBuffer)
            .resize(15, 15)
            .jpeg({ quality: 98 })
            .toBuffer({ resolveWithObject: true });
          const base64 = Buffer.from(sharpImage.data).toString("base64");
          const newShow = Object.assign({}, show, {
            base64
          });

          console.log(`Saving to Database ${parsedURL}`);
          await dataBase
          .collection("flix")
          .replaceOne({ netflixid: show.netflixid }, newShow);
          console.log(`Saved to Database ${parsedURL}`);
          return true;
        } catch (error) {
          console.log(`Failed to parse image URLs`);
          reject(error);
        }
      },
      function(error: any) {
        if (error) {
          console.log(`Failed to parse image URLs`);
          reject(false);
        } else {
          resolve(true);
        }
      }
    );
  } catch (error) {
    reject(error);
  }
};
