export interface INinfo {
  image1: string;
  title: string;
  synopsis: string;
  matlevel: string;
  matlabel: string;
  avgrating: string;
  type: string;
  updated: string;
  unogsdate: string;
  released: string;
  netflixid: string;
  runtime: string;
  image2: string;
  download: string;
}

export interface ICountry {
  country: string;
  ccode: string;
  seasons: string;
  new: string;
  expires: string;
  seasondet: string[];
  audio: string[];
  subs: string[];
  cid: string;
}

export interface IPeople {
  actor: string[];
  creator: string[];
  director: string[];
}

export interface IImdbInfo {
  rating: string;
  votes: string;
  metascore: string;
  genre: string;
  awards: string;
  runtime: string;
  plot: string;
  country: string;
  language: string;
  imdbid: string;
}

export interface IDetailsResponse {
  nfinfo: INinfo;
  imdbinfo: IImdbInfo;
  people: Array<{ [key: string]: string[] }>;
}
