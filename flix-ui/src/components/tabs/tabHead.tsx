import * as React from "react";
import { TabHead } from "./tabs-styles";
import { ITabHead } from "../../types";

const Head: React.FunctionComponent<ITabHead> = ({
  title,
  handleClick,
  selected
}) => (
  <TabHead selected={selected} onClick={() => handleClick(title)}>
    {title}
  </TabHead>
);

export default Head;
