export { IDetailsResponse } from './../server/src/types';
export interface flix {
  image: string;
  rating: string;
  title: string;
  netflixid: string;
  synopsis: string;
  released: string;
  runtime: string;
  base64: string;
  countries: string[];
  type: string;
  largeimage: string;
  country?: string;
}
