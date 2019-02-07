import * as React from "react";
import { DropdownWrapper, DropdownList } from "./dropdown-styles";
import ListItem from "./dropdown-list-item";

const List: React.FunctionComponent<{
  items: Array<{ value: string; selected: boolean; id: string }>;
  handleClick: (value: string, id: string) => void;
}> = ({ items, handleClick }) => (
  <DropdownList>
    {items.map(({ value, id }) => (
      <ListItem value={value} id={id} handleClick={handleClick} />
    ))}
  </DropdownList>
);

export default List;
