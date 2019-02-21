import { Query } from "react-apollo";
import FlixCards from "../components/card/cards";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as React from "react";
import {
  OpenDetailedViewAction,
  CloseDetailedViewAction,
  LoadingDetailedView
} from "../action-creators";
import { IState, ICard } from "../types";
import FlixQuery from "../gql/flixQuery";
import GetTitlesByType from "../gql/getTitlesByQuery";
import styled from "styled-components";
import { ReactComponent as SpinnerSVG } from "../assets/rolling.svg";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  open: (flixid: string) => dispatch(OpenDetailedViewAction(flixid)),
  close: (flixid: string) => dispatch(CloseDetailedViewAction(flixid)),
  loading: (flixId: string) => dispatch(LoadingDetailedView(flixId))
});

const mapStateToProps = ({
  cards,
  country: { id },
  filter: { type }
}: IState) => ({
  cards,
  countryId: id,
  type
});

const LatestFlixContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

const Loader = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: #ffc30b;
`;

interface IProps {
  open: (id: string) => void;
  close: (id: string) => void;
  loading: (id: string) => void;
  cards: ICard[];
  countryId: string;
  type: string;
}

interface IVState {
  country: string;
}

class Cards extends React.Component<IProps, IVState> {
  constructor(props: IProps) {
    super(props);
  }

  shouldComponentUpdate(nextProps: IProps, nextState: IVState) {
    if (
      nextProps.countryId !== this.props.countryId ||
      nextProps.type !== this.props.type
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    debugger;
    const query = this.props.type ? GetTitlesByType : FlixQuery;
    const variables = this.props.type
      ? { type: this.props.type, country: this.props.countryId }
      : { country: this.props.countryId, page: 1, daysBack: 15 };

    return (
      <LatestFlixContainer>
        <Query
          query={query}
          variables={variables}
          fetchPolicy={"cache-and-network"}
        >
          {({ data, error, loading }) => {
            if (loading) {
              return <Loader>Loading ...</Loader>;
            }

            if (!loading && data) {
              return (
                <FlixCards
                  items={
                    this.props.type
                      ? data.getReleasesByType
                      : data.getNewReleasesByCountry
                  }
                  openDetailedView={this.props.open}
                  closeDetailedView={this.props.close}
                  loadingDetailedView={this.props.loading}
                />
              );
            }

            if (error) {
              return <span>Failed to load</span>;
            }
          }}
        </Query>
      </LatestFlixContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
