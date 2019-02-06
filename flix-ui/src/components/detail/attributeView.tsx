import * as React from "react";
import {
  AttributeWrapper,
  AttributeTitle,
  AttributeValue
} from "./detail.styles";

interface IAttribute {
  title: string;
  value: string;
  direction: string;
}

const AttributeView: React.FunctionComponent<IAttribute> = ({
  title,
  value,
  direction = "row"
}) => (
  <AttributeWrapper direction={direction}>
    <AttributeTitle>{title}</AttributeTitle>
    <AttributeValue>{value}</AttributeValue>
  </AttributeWrapper>
);

export default AttributeView;