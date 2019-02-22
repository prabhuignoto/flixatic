import * as React from "react";
import {
  CheckboxWrapper,
  CheckboxButton,
  CheckboxList,
  CheckboxListItem,
  PosedCheckBoxList,
  CheckIcoWrapper
} from "./checkbox-group-styles";
import { ReactComponent as Check } from "../../assets/check.svg";

interface ICheckboxGroup {
  items: Array<{ name: string; value: string; selected?: boolean }>;
  label: string;
  handleSelections?: (selected: string[]) => void;
}

const CheckboxGroup: React.FunctionComponent<ICheckboxGroup> = ({
  items,
  label,
  handleSelections
}) => {
  const [open, setOpen] = React.useState(false);
  const [checkBoxItems, setCheckboxItems] = React.useState(
    items.map(x =>
      Object.assign({}, x, {
        selected: false
      })
    )
  );

  const checkboxListRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      checkboxListRef.current.focus();
    }
    const selectedItems = checkBoxItems.filter(y => y.selected);
    handleSelections(selectedItems.map(x => x.name));
  });

  const handleSelection = (value: string, selected: boolean) => {
    const updatedCheckboxItems = checkBoxItems.map(x => {
      if (x.value === value) {
        return Object.assign({}, x, {
          selected: !selected
        });
      } else {
        return x;
      }
    });
    setCheckboxItems(updatedCheckboxItems);
  };

  return (
    <CheckboxWrapper>
      <CheckboxButton onClick={() => setOpen(!open)} open={open}>
        {label}
      </CheckboxButton>
      {open && (
        <PosedCheckBoxList
          initialPose="close"
          pose={open ? "open" : "close"}
          tabIndex={0}
          ref={checkboxListRef}
          onBlur={() => setOpen(false)}
          onKeyUp={(evt: React.KeyboardEvent) => {
            if (evt.which === 27) {
              setOpen(false);
            }
          }}
        >
          {checkBoxItems.map(x => (
            <CheckboxListItem
              onClick={() => {
                handleSelection(x.value, x.selected);
              }}
              selected={x.selected}
            >
              {x.selected && (
                <CheckIcoWrapper>
                  <Check />
                </CheckIcoWrapper>
              )}
              {x.name}
            </CheckboxListItem>
          ))}
        </PosedCheckBoxList>
      )}
    </CheckboxWrapper>
  );
};

export default CheckboxGroup;
