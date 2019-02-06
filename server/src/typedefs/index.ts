import { gql } from "apollo-server-express";

export default gql`
  type Release {
    netflixid: Int!
    title: String!
    image: String!
    synopsis: String!
    rating: String!
    type: String!
    released: String!
    runtime: String!
    largeimage: String!
    unogsdate: String!
    imdbid: String!
    download: String!
  }
  type Country {
    code: String!
    country: String!
    currency: String!
  }

  type ninfo {
    image1: String!
    title: String!
    synopsis: String!
    matlevel: String!
    matlabel: String!
    avgrating: String!
    type: String!
    updated: String!
    unogsdate: String!
    released: String!
    netflixid: String!
    runtime: String!
    image2: String!
    download: String!
  }

  type imdbinfo {
    rating: String!
    votes: String!
    metascore: String!
    genre: String!
    awards: String!
    runtime: String!
    plot: String!
    country: String!
    language: String!
    imdbid: String!
  }

  type MovieDetails {
    flixInfo: ninfo!
    imdbInfo: imdbinfo!
  }

  type Query {
    getNewReleasesByCountry(
      country: String!
      page: Int!
      daysBack: Int!
    ): [Release!]!
    getMovieDetails(flixId: String!): MovieDetails!
  }
`;
