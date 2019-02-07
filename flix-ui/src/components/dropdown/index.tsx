import * as React from "react";
import {
  DropdownWrapper,
  DropdownList,
  ListWrapper,
  ArrowWrapper,
  DropdownVal
} from "./dropdown-styles";
import List from "./dropdown-list";
import { ReactComponent as ArrowSVG } from "../../assets/arrow-dropdown.svg";

interface IDropDown {
  items: Array<{ value: string; selected?: boolean; id: string }>;
  title?: string;
  handleSelection: (id: string, value: string) => void;
}

const Dropdown: React.FunctionComponent<IDropDown> = ({
  items,
  title,
  handleSelection
}) => {
  const [open, setOpen] = React.useState(false);
  const [selectedVal, setSelectedVal] = React.useState(title);

  const [collection, setItems] = React.useState(
    items.map(x =>
      Object.assign({}, x, {
        selected: false
      })
    )
  );
  const handleClick = (value: string, id: string) => {
    setSelectedVal(value);
    setItems(
      collection.map(x => {
        let selected = false;
        if (x.value === value) {
          selected = true;
        }
        return Object.assign({}, x, {
          selected
        });
      })
    );
    handleSelection(value, id);
  };

  return (
    <DropdownWrapper
      onClick={() => {
        setOpen(!open);
      }}
    >
      <DropdownVal>{selectedVal}</DropdownVal>
      {open && (
        <ListWrapper>
          <List items={collection} handleClick={handleClick} />
        </ListWrapper>
      )}
      <ArrowWrapper>
        <ArrowSVG />
      </ArrowWrapper>
    </DropdownWrapper>
  );
};

export default Dropdown;
