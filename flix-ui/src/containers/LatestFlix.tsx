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
import styled from "styled-components";
import { ReactComponent as SpinnerSVG } from "../assets/rolling.svg";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  open: (flixid: string) => dispatch(OpenDetailedViewAction(flixid)),
  close: (flixid: string) => dispatch(CloseDetailedViewAction(flixid)),
  loading: (flixId: string) => dispatch(LoadingDetailedView(flixId))
});

const mapStateToProps = ({ cards, country: { id } }: IState) => ({
  cards,
  countryId: id
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
  color: #FFC30B;
`;

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
      <LatestFlixContainer>
        <Query
          query={FlixQuery}
          variables={{ country: this.props.countryId, page: 1, daysBack: 15 }}
        >
          {({ data, error, loading }) => {
            if (loading) {
              return (
                <Loader>
                  Loading ...
                </Loader>
              );
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
