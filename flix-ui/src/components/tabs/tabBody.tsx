import * as React from "react";
import { TabBody } from "./tabs-styles";

const Body: React.FunctionComponent<{
  view: () => any;
}> = ({ view }) => <TabBody>{view}</TabBody>;

export default Body;
