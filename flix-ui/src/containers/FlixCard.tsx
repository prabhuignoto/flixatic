import * as React from "react";
import { IState, DetailedInfo } from "../types";
import { connect } from "react-redux";
import FlixCard from "../components/card/card";

const mapStateToProps = ({
  detailedInfo: { flixId, isFlixLoading, isFlixFailedToLoad }
}: IState) => ({
  isLoading: isFlixLoading,
  dataLoadFailed: isFlixFailedToLoad,
  activeFlixId: flixId
});

export default connect(
  mapStateToProps,
  null
)(FlixCard);
