import * as React from "react";
import { Wrapper } from "./styles/rating.style";

interface IRating {
  rating: string;
}

const Rating: React.FunctionComponent<IRating> = ({ rating }) => (
  <Wrapper>{rating}</Wrapper>
);

export default Rating;