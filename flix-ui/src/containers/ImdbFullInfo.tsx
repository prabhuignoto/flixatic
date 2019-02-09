import * as React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import ImdbFullInfo from "../components/detail/imdbFullInfo";

interface IIMdbFullContainer {
  flixId: string;
}

const ImdbQuery = gql`
  query getFullInfo($flixId: String!) {
    getFullImdbInfo(flixId: $flixId) {
      poster
      tomatoUserRating
      rated
      filmid
      runtime
      tomatoReviews
      tomatoRotten
      plot
      country
      date
      genre
      metascore
      tomatoRating
      date
      country
      tomatoUserMeter
      language
      tomatoFresh
      type
      metascore
      tomatoMeter
      imdbvotes
      imdbrating
      released
    }
  }
`;

const IMdbFullContainer: React.FunctionComponent<IIMdbFullContainer> = ({
  flixId
}) => (
  <Query query={ImdbQuery} variables={{ flixId }}>
    {({ loading, data, error }) => {
      if (loading) {
        return <span>Loading</span>;
      }

      if (!loading && data) {
        return <ImdbFullInfo {...data.getFullImdbInfo} />;
      }

      if (error) {
        return <span>Failed to load</span>;
      }
    }}
  </Query>
);

export default IMdbFullContainer;
