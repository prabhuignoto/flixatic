import * as React from "react";
import { Wrapper, StarWrapper } from "./stars-style";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as StarOutline } from "../../assets/star-outline.svg";

interface IStars {
  rating: string;
}

const Stars: React.FunctionComponent<IStars> = ({ rating }) => {
  const finalRating: number = 5 * (Number(rating) / 10);
  const canFloor: boolean = finalRating % 1 > 5;
  const starIterations = canFloor
    ? Math.floor(finalRating)
    : Math.ceil(finalRating);

  return (
    <Wrapper>
      {Array(starIterations).fill(0)
        .map(x => (
          <StarWrapper>  
            <Star />
          </StarWrapper>
        ))}
      {Array(5 - starIterations).fill(0)
        .map(() => (
          <StarWrapper>
            <StarOutline />
          </StarWrapper>
        ))}
    </Wrapper>
  );
};

export default Stars;
