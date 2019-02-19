import * as React from "react";
import { ToolbarNav, ToolbarList, ToolbarListItem } from "./toolbar-styles";
import CountryDropdown from "../../containers/CountryDropdown";
import RadioGroupTitleType from "../../containers/filterByType";

const ToolBar: React.FunctionComponent = () => (
  <ToolbarNav>
    <ToolbarList>
      <ToolbarListItem>
        <RadioGroupTitleType />
      </ToolbarListItem>
      <ToolbarListItem style={{ marginLeft: "auto" }}>
        <CountryDropdown
          items={[
            { value: "United States", id: "US" },
            { value: "United Kingdom", id: "GB" },
            { value: "India", id: "IN" },
            { value: "Germany", id: "DE" },
            { value: "Japan", id: "JP" },
            { value: "Australia", id: "AU" },
            { value: "Netherlands", id: "NL" }
          ]}
          title={"Switch country"}
        />
      </ToolbarListItem>
    </ToolbarList>
  </ToolbarNav>
);

export default ToolBar;
