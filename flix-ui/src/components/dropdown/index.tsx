import * as React from "react";
import {
  DropdownWrapper,
  ArrowWrapper,
  DropdownVal,
  PosedListWrapper
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
  const listWrapperRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      listWrapperRef.current.focus();
    }
  });

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
        // listWrapperRef.current.focus();
      }}
    >
      <DropdownVal>{selectedVal}</DropdownVal>
      {open && (
        <PosedListWrapper
          pose={"open"}
          initialPose={"close"}
          tabIndex={0}
          ref={listWrapperRef}
          onBlur={() => setOpen(false)}
        >
          <List items={collection} handleClick={handleClick} />
        </PosedListWrapper>
      )}
      <ArrowWrapper>
        <ArrowSVG />
      </ArrowWrapper>
    </DropdownWrapper>
  );
};

export default Dropdown;
