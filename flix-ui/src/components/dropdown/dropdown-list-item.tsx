import * as React from "react";
import { DropdownListItem, DropdownListItemVal } from "./dropdown-styles";
import { IDropDown } from "../../types";

const ListItem: React.FunctionComponent<IDropDown> = ({ value, handleClick, id }) => (
  <DropdownListItem onClick={() => handleClick(value, id)}>
    <DropdownListItemVal>
      {value}
    </DropdownListItemVal>
  </DropdownListItem>
);

export default ListItem;
