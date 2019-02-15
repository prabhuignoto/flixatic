import { Query } from "react-apollo";
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
import { IState, ICard } from "../types";
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

interface IVState {
  country: string;
}

class Cards extends React.Component<IProps, IVState> {
  constructor(props: IProps) {
    super(props);
  }

  shouldComponentUpdate(nextProps: IProps, nextState: IVState) {
    if (nextProps.countryId !== this.props.countryId) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Query
        query={FlixQuery}
        variables={{ country: this.props.countryId, page: 1, daysBack: 15 }}
      >
        {({ data, error, loading }) => {
          if (loading) {
            return <span>loading</span>;
          }

          if (!loading && data) {
            return (
              <FlixCards
                items={data.getNewReleasesByCountry}
                openDetailedView={this.props.open}
                closeDetailedView={this.props.close}
                loadingDetailedView={this.props.loading}
              />
            );
          }

          if (error) {
            return <span>Errored</span>;
          }
        }}
      </Query>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
