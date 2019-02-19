import * as React from "react";
import { connect } from "react-redux";
import { IState, IFilter, IRadioGroupItem } from "../types";
import { Dispatch } from "redux";
import { UpdateFilter } from "../action-creators";
import RadioGroup from "../components/radio-group";

interface IDispatchProps {
  handleSelected: (selected: { name: string; value: string }) => void;
}

interface IStateProps {
  items: Array<{ name: string; value: string, selected: boolean }>;
}

type ICommonProps = IStateProps & IDispatchProps;


const mapStateToProps = (state: any) => ({
  items: state.settings.filter.types
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSelected: (selected: { name: string; value: string }) => {
    dispatch(
      UpdateFilter({
        type: selected.value
      })
    );
  }
});

export default connect<IStateProps, IDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(RadioGroup);