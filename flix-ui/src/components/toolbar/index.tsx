import * as React from "react";
import { ToolbarNav, ToolbarList, ToolbarListItem } from "./toolbar-styles";
import CountryDropdown from "../../containers/CountryDropdown";
import RadioGroupTitleType from "../../containers/filterByType";
import { connect } from "react-redux";
import Genre from "../../containers/Genre";

const mapStateToProps = (state: any) => ({
  items: state.settings.countries
});

interface IProps {
  items?: Array<{ value: string; id: string }>;
}

class Toolbar extends React.PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <ToolbarNav>
        <ToolbarList>
          <ToolbarListItem>
            <RadioGroupTitleType />
          </ToolbarListItem>
          <ToolbarListItem>
            <Genre />
          </ToolbarListItem>
          <ToolbarListItem style={{ marginLeft: "auto" }}>
            <CountryDropdown
              items={this.props.items}
              title={"Switch country"}
            />
          </ToolbarListItem>
        </ToolbarList>
      </ToolbarNav>
    );
  }
}

export default connect<{}, {}>(
  mapStateToProps,
  null
)(Toolbar);
