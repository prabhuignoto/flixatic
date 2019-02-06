import * as React from "react";
import { IState } from "../types";
import { connect } from "react-redux";
import { FlixCard } from "../components/card/card";
import { createSelector } from "reselect";

const mapStateToProps = ({detailedInfo: {isFlixFailedToLoad, isFlixLoading}}: IState) => ({
  isFlixFailedToLoad,
  isFlixLoading
});

export default connect(mapStateToProps, null)(FlixCard);