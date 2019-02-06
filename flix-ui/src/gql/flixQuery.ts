import { gql } from "apollo-boost";

export default gql`
  query getNewReleases($country: String!, $page: Int!, $daysBack: Int!) {
    getNewReleasesByCountry(
      country: $country
      page: $page
      daysBack: $daysBack
    ) {
      netflixid
      title
      image
      synopsis
      type
      largeimage
      imdbid
      rating
      released
      runtime
    }
  }
`;
