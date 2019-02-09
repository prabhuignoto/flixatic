import { graphql, compose } from "react-apollo";
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

const mapStateToProps = ({ detailedInfo: { flixId, isOpen } }: IState) => {
  return {
    flixId,
    isOpen
  };
};
import DetailsQuery from "../gql/detailsQuery";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closePopup: (flixId: string) => dispatch(CloseDetailedViewAction(flixId))
});

interface IProps {
  flixId: string;
  isOpen: boolean;
  data: {
    getMovieDetails: {
      flixInfo: info;
      imdbInfo: info;
      cast: {
        creator: string[];
        director: string[];
        actor: string[];
      }
    };
    loading: boolean;
  };
  error: any;
  closePopup: (flixId: string) => void;
}

const DetailedViewHOC = ({ data, closePopup, flixId }: IProps) => {
  if (data && data.loading) {
    return <></>;
  } else if (data && !data.loading && data.getMovieDetails) {
    return (
      <DetailPopup
        imdbInfo={data.getMovieDetails.imdbInfo}
        netflixInfo={data.getMovieDetails.flixInfo}
        cast={data.getMovieDetails.cast}
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
  graphql(DetailsQuery, {
    skip: ({ isOpen, flixId }: IProps) => {
      return !flixId && !isOpen;
    },
    options: ({ flixId }: IProps) => {
      return {
        variables: {
          flixId: flixId
        },
        onCompleted: ({ getMovieDetails }: any) => {
          if (getMovieDetails) {
            Store.dispatch(
              LoadedDetailedView(getMovieDetails.flixInfo.netflixid)
            );
          }
        },
        onError: (error: any) => {
          if (error) {
            Store.dispatch(FlixDataLoadFailed());
          }
        }
      };
    }
  })
)(DetailedViewHOC);
