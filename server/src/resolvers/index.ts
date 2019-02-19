import { config } from "dotenv";
import "node-fetch";
import MongoClient from "../getClient";
import errorLogger from "../loggers/error";
import { IDetailsResponse } from "../types";

interface IArgs {
  country: string;
  page: number;
  daysBack: number;
}

interface IArgs2 {
  flixId: string;
}

if (process.env.NODE_ENV === "development") {
  config();
}

const dbName = process.env.MONGO_DB_NAME;

export default {
  Query: {
    async getNewReleasesByCountry(
      obj: any,
      { country, page, daysBack }: IArgs,
      { dataSources }: any
    ) {
      try {
        if (country && page && daysBack) {
          await MongoClient.connect();
          const dataBase = MongoClient.db(dbName);
          const response = await dataBase
            .collection("flix")
            .find({
              countries: {
                $in: [country]
              }
            })
            .toArray();
          return response;
        }
      } catch (error) {
        errorLogger.log({
          level: "error",
          message: `Failed to retrieve the new releases \n ${error}`
        });
      }
    },
    async getMovieDetails(obj: any, { flixId }: IArgs2, { dataSources }: any) {
      try {
        if (flixId) {
          await MongoClient.connect();
          const dataBase = MongoClient.db(dbName);
          const response = await dataBase.collection("flix_details").findOne({
            "nfinfo.netflixid": flixId
          });
          const {
            nfinfo: flixInfo,
            imdbInfo,
            cast
          } = (response as unknown) as IDetailsResponse;
          return {
            cast,
            flixInfo,
            imdbInfo
          };
        }
      } catch (error) {
        errorLogger.log({
          level: "error",
          message: `Failed to retrieve the get Movie details \n ${error}`
        });
      }
    },
    async getReleasesByType(
      obj: any,
      { type, country }: { type: string; country: string },
      { dataSources }: any
    ) {
      try {
        if (type) {
          await MongoClient.connect();
          const datBase = MongoClient.db(dbName);
          const response = await datBase
            .collection("flix")
            .find({
              countries: {
                $in: [country],
              },
              type,
            })
            .toArray();
          return response;
        }
      } catch (error) {
        errorLogger.log({
          level: "error",
          message: `Failed to retrieve the Titles for Filter \n ${error}`
        });
      }
    },
    getFullImdbInfo(obj: any, { flixId }: IArgs2, { dataSources }: any) {
      if (flixId) {
        return dataSources.flixApi.getFullImdbInfo(flixId);
      }
    },
    getPosters(obj: any, { flixId }: IArgs2, { dataSources }: any) {
      if (flixId) {
        return dataSources.flixApi.getPosters(flixId);
      }
    }
  }
};
