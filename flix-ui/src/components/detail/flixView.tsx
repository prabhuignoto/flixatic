import * as React from "react";
import {
  FlixWrapper,
  FlixImageWrapper,
  FlixImage,
  FlixTitle,
  FlixStarsWrapper
} from "./flix.styles";
import Stars from "../card/stars";

interface IFlixView {
  title: string;
  avgRating: string;
  image1: string;
}

const FlixView: React.FunctionComponent<IFlixView> = ({
  title,
  avgRating,
  image1
}) => (
  <FlixWrapper>
    <FlixImageWrapper>
      <FlixImage src={image1} />
    </FlixImageWrapper>
    <FlixStarsWrapper>
      <Stars rating={avgRating} />
    </FlixStarsWrapper>
  </FlixWrapper>
);


export default FlixView;