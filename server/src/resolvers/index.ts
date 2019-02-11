import "node-fetch";

interface IArgs {
  country: string;
  page: number;
  daysBack: number;
}

interface IArgs2 {
  flixId: string;
}

export default {
  Query: {
    getNewReleasesByCountry(
      obj: any,
      { country, page, daysBack }: IArgs,
      { dataSources }: any,
    ) {
      if (country && page && daysBack) {
        return dataSources.flixApi.getNewReleasesByCountry(
          country,
          page,
          daysBack,
        );
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
