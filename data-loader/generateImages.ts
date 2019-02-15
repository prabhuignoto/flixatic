const URL = require("url").URL;
import Sharp from "sharp";
import { MongoClient } from "mongodb";
import Request from "request-promise";
import { Buffer } from "buffer";
import Async from "async";
import { config } from "dotenv";
import { flix } from "./types";
import chalk from "chalk";

if (process.env.NODE_ENV === "development") {
  config();
}

export default async (
  resolve: (result: boolean) => void,
  reject: (result: boolean) => void
) => {
  try {
    // connect to database
    console.log(chalk.blueBright(`***********Initializing Image processing***********`));
    console.log(chalk.blueBright(`Connecting to ${process.env.MONGO_DB_URL}`));

    const client = new MongoClient(process.env.MONGO_DB_URL as string);
    await client.connect();
    const dataBase = client.db("flix_db");

    console.log(
      chalk.blueBright(`Connected to database. Fetching flix collection`)
    );
    // get all shows
    const shows = await dataBase
      .collection("flix")
      .find({})
      .toArray();


    Async.eachOfLimit(
      shows,
      12,
      async (show: flix, key: string | number) => {
        try {
          const parsedURL = new URL(show.image);
          const responseBuffer = await Request(parsedURL.toString(), {
            encoding: null,
            strictSSL: parsedURL.protocol === "https:" ? true : false
          });

          console.log(
            chalk.green(`Generating compressed version for ${show.image}`)
          );

          const sharpImage = await Sharp(responseBuffer)
            .resize(15, 15)
            .jpeg({ quality: 85 })
            .toBuffer({ resolveWithObject: true });
          const base64 = Buffer.from(sharpImage.data).toString("base64");
          const newShow = Object.assign({}, show, {
            base64
          });

          await dataBase
            .collection("flix")
            .replaceOne({ netflixid: show.netflixid }, newShow);
          return true;
        } catch (error) {
          console.log(chalk.red(`Failed to parse image URLs`));
          console.log(error);
          reject(error);
        }
      },
      function(error: any) {
        if (error) {
          console.log(chalk.red(`Failed to parse image URLs`));
          console.log(error);
          reject(false);
        } else {
          console.log(chalk.blueBright("Finished processing Images"));
          resolve(true);
        }
      }
    );
  } catch (error) {
    reject(error);
  }
};
