import { gql } from "apollo-boost";

export default gql`
  query getMovieDetails($flixId: String!) {
    getMovieDetails(flixId: $flixId) {
      flixInfo {
        title
        synopsis
        matlevel
        avgrating
        type
        image1
        netflixid
      }
      imdbInfo {
        rating
        votes
        metascore
        genre
        country
        language
        plot
      }
      cast {
        actor
        director
        creator
      }
    }
  }
`;
