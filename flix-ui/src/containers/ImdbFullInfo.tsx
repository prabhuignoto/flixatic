import * as React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import ImdbFullInfo from "../components/detail/imdbFullInfo";
import styled from "styled-components";
import { ReactComponent as LoadingSVG } from "../assets/rolliong.svg";

interface IIMdbFullContainer {
  flixId: string;
}

const LoaderWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

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
  <Container>
    <Query query={ImdbQuery} variables={{ flixId }}>
      {({ loading, data, error }) => {
        if (loading) {
          return (
            <LoaderWrapper>
              <LoadingSVG />
            </LoaderWrapper>
          );
        }

        if (!loading && data) {
          return <ImdbFullInfo {...data.getFullImdbInfo} />;
        }

        if (error) {
          <span>error</span>;
        }
      }}
    </Query>
  </Container>
);

export default IMdbFullContainer;
