import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import FlixCards from "../components/card/cards";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as React from "react";
import {
  OpenDetailedViewAction,
  CloseDetailedViewAction,
  FlixDataLoaded,
  LoadingDetailedView
} from "../action-creators";
import { compose } from "react-apollo";
import Store from "../store";
import { IState, ICard, IStateCard } from "../types";
import {createSelector} from "reselect";


const mapDispatchToProps = (dispatch: Dispatch) => ({
  open: (flixid: string) => dispatch(OpenDetailedViewAction(flixid)),
  close: (flixid: string) => dispatch(CloseDetailedViewAction(flixid)),
  loading: (flixId: string) => dispatch(LoadingDetailedView(flixId))
});

const mapStateToProps = ({ cards }: IState) => ({
  cards
});

const query = gql`
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

interface IProps {
  open: (id: string) => void;
  close: (id: string) => void;
  loading: (id: string) => void;
  cards: ICard[];
}

const Cards = ({ cards, open, close, loading }: IProps) => {
  return (
    <FlixCards
      items={cards}
      openDetailedView={open}
      closeDetailedView={close}
      loadingDetailedView={loading}
    />
  );
};

export default compose(
  graphql(query, {
    options: () => ({
      variables: {
        country: "US",
        page: 1,
        daysBack: 20
      },
      onCompleted: ({ getNewReleasesByCountry }: any) => {
        if (getNewReleasesByCountry) {
          const modData = getNewReleasesByCountry.map((x: any) =>
            Object.assign({}, x, {
              isLoading: false,
              dataLoadFailed: false
            })
          );
          Store.dispatch(FlixDataLoaded(modData));
        }
      }
    })
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Cards);
