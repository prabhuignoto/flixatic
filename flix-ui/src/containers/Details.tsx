import { graphql, compose } from "react-apollo";
import { gql } from "apollo-boost";
import { connect } from "react-redux";
import { IState, info } from "../types";
import DetailPopup from "../components/detail/detail-popup";
import * as React from "react";
import { Dispatch } from "redux";
import {
  CloseDetailedViewAction,
  LoadedDetailedView,
  FlixDataLoadFailed
} from "../action-creators";
import Store from "../store";

const mapStateToProps = ({
  detailedInfo: { flixId, isOpen }
}: IState) => {
  return {
    flixId,
    isOpen,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closePopup: (flixId: string) => dispatch(CloseDetailedViewAction(flixId))
});

const query = gql`
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
    }
  }
`;

interface IProps {
  flixId: string;
  isOpen: boolean;
  data: {
    getMovieDetails: {
      flixInfo: info;
      imdbInfo: info;
    };
    loading: boolean;
  };
  error: any;
  closePopup: (flixId: string) => void;
  onDataLoaded: () => void;
}

const DetailedViewHOC = ({ data, closePopup, flixId }: IProps) => {
  if (data && data.loading) {
    return <></>;
  } else if (data && !data.loading && data.getMovieDetails) {
    return (
      <DetailPopup
        imdbInfo={data.getMovieDetails.imdbInfo}
        netflixInfo={data.getMovieDetails.flixInfo}
        close={closePopup}
      />
    );
  } else {
    return <></>;
  }
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  graphql(query, {
    skip: ({ isOpen, flixId }: IProps) => {
      return !flixId && !isOpen;
    },
    options: ({ flixId, onDataLoaded }: IProps) => {
      return {
        variables: {
          flixId: flixId
        },
        onCompleted: ({ getMovieDetails }: any) => {
          debugger;
          if (getMovieDetails) {
            Store.dispatch(
              LoadedDetailedView(getMovieDetails.flixInfo.netflixid)
            );
          }
        },
        onError: (error: any) => {
          if(error) {
            Store.dispatch(FlixDataLoadFailed())
          }
        }
      };
    }
  })
)(DetailedViewHOC);
