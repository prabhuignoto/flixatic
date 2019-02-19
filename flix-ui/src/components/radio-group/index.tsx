import * as React from "react";
import {
  RadioGroupWrapper,
  RadioGroupList,
  RadioGroupListItem
} from "./radio-group-styles";
import { IRadioGroup, IRadioGroupItem } from "../../types";

const RadioGroup: React.FunctionComponent<IRadioGroup> = ({
  items,
  handleSelected
}) => {
  const [radioItems, setRadioItems] = React.useState(
    items.map(x => Object.assign({}, x, { selected: false }))
  );

  const handleSelection = (name: string, value: string) => {
    setRadioItems(
      radioItems.map((item: IRadioGroupItem) => {
        let selected = false;
        if (item.value === value) {
          selected = true;
        }
        return Object.assign({}, item, {
          selected
        });
      })
    );
    handleSelected({
      name,
      value
    });
  };

  return (
    <RadioGroupWrapper>
      <RadioGroupList>
        {radioItems.map(item => (
          <RadioGroupListItem
            onClick={() => handleSelection(item.name, item.value)}
            selected={item.selected}
            key={item.name}
          >
            {item.name}
          </RadioGroupListItem>
        ))}
      </RadioGroupList>
    </RadioGroupWrapper>
  );
};

export default RadioGroup;
