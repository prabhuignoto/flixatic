import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import "node-fetch";
import errorLogger from "./loggers/error";
import { IDetailsResponse } from "./types";

export default class FlixDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.UNOGS_API_2;
  }

  public async getNewReleasesByCountry(
    country: string,
    page: number,
    daysBack: number,
  ) {
    try {
      // generate the query
      const query = `?q=get:new${daysBack}:${country}&p=${page}&t=ns&st=adv`;
      const response = await this.get(query);
      // return the response
      return response.ITEMS;
    } catch (error) {
      // tslint:disable-next-line:no-console
      errorLogger.log({
        level: "error",
        message: error,
      });
    }
  }

  public async getMovieDetails(flixID: string) {
    try {
      // generate the query
      const query = `?t=loadvideo&q=${flixID}`;
      const response = await this.get(query);
      const {
        nfinfo: flixInfo,
        imdbinfo: imdbInfo,
      } = response.RESULT as IDetailsResponse;
      return {
        flixInfo,
        imdbInfo,
      };
    } catch (error) {
      // tslint:disable-next-line:no-console
      errorLogger.log({
        level: "error",
        message: error,
      });
    }
  }

  public willSendRequest(request: RequestOptions) {
    request.headers.set("X-RapidAPI-Key", process.env.API_KEY || "");
  }
}
