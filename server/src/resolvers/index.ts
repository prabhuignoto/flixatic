import { config } from "dotenv";
import "node-fetch";
import MongoClient from "../getClient";

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
      { dataSources }: any,
    ) {
      if (country && page && daysBack) {
        await MongoClient.connect();
        const dataBase = MongoClient.db(dbName);
        const response = await dataBase.collection("flix").find({
          country,
        }).toArray();
        return response;
      }
    },
    getMovieDetails(obj: any, { flixId }: IArgs2, { dataSources }: any) {
      if (flixId) {
        return dataSources.flixApi.getMovieDetails(flixId);
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
    },
  },
};
