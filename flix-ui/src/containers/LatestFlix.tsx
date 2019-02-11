import { graphql } from "react-apollo";
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
import FlixQuery from "../gql/flixQuery";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  open: (flixid: string) => dispatch(OpenDetailedViewAction(flixid)),
  close: (flixid: string) => dispatch(CloseDetailedViewAction(flixid)),
  loading: (flixId: string) => dispatch(LoadingDetailedView(flixId))
});

const mapStateToProps = ({ cards, country: { id } }: IState) => ({
  cards,
  countryId: id
});

interface IProps {
  open: (id: string) => void;
  close: (id: string) => void;
  loading: (id: string) => void;
  cards: ICard[];
  countryId: string;
}

class Cards extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { cards, close, loading } = this.props;
    return (
      <FlixCards
        items={cards}
        openDetailedView={open}
        closeDetailedView={close}
        loadingDetailedView={loading}
      />
    );
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  graphql(FlixQuery, {
    // can we do this in a better way
    skip: ({cards}: IProps) => cards.length > 0,
    options: ({ countryId }: IProps) => {
      return {
        variables: {
          country: countryId,
          page: 1,
          daysBack: 15
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
      };
    }
  })
)(Cards);
