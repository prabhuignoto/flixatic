import * as React from "react";
import { IState } from "../types";
import { Dispatch } from "redux";
import { UpdateCountry } from "../action-creators";
import { connect } from "react-redux";
import Dropdown from "../components/dropdown";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSelection: (country: string, id: string) => dispatch(UpdateCountry(country, id))
});

export default connect(
  null,
  mapDispatchToProps
)(Dropdown);
