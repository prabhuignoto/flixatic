import * as React from "react";
import { DropdownListItem } from "./dropdown-styles";
import { IDropDown } from "../../types";

const ListItem: React.FunctionComponent<IDropDown> = ({ value, handleClick, id }) => (
  <DropdownListItem onClick={() => handleClick(value, id)}>
    {value}
  </DropdownListItem>
);

export default ListItem;
