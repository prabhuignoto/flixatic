import { gql } from "apollo-boost";

export default gql`
  query getReleasesByType($type: String!, $country: String!) {
    getReleasesByType(
      type: $type,
      country: $country
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
      base64
    }
  }
`;
