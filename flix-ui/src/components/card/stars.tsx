import * as React from "react";
import { Wrapper, StarWrapper } from "./styles/stars-style";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as StarOutline } from "../../assets/star-outline.svg";

interface IStars {
  rating: string;
  size?: string;
}

const Stars: React.FunctionComponent<IStars> = ({ rating, size = "small" }) => {
  const finalRating: number = 5 * (Number(rating) / 10);
  const canFloor: boolean = finalRating % 1 > 5;
  const starIterations = canFloor
    ? Math.floor(finalRating)
    : Math.ceil(finalRating);

  return (
    <Wrapper>
      {Array(starIterations)
        .fill(0)
        .map(y => Math.random() * 20)
        .map(x => (
          <StarWrapper key={x} size={size}>
            <Star />
          </StarWrapper>
        ))}
      {Array(5 - starIterations)
        .fill(0)
        .map(() => Math.random() * 20)
        .map(x => (
          <StarWrapper key={x} size={size}>
            <StarOutline />
          </StarWrapper>
        ))}
    </Wrapper>
  );
};

export default Stars;
