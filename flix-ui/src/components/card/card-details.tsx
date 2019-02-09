import * as React from "react";
import { RatingWrapper, StarsWrapper } from "./card.style";
import Rating from "./rating";
import Stars from "./stars";
import {
  PosedDetails,
  DetailsHeader,
  Runtime,
  Released,
  Title,
  Synopsis,
  PosedMoreDetails,
  Button,
  ExpandButton
} from "./card-details-styles";
import { ReactComponent as CloseSVG } from "../../assets/close.svg";
import { ReactComponent as ExpandSVG } from "../../assets/arrow-dropdown.svg";

interface ICardDetails {
  rating: string;
  netflixid: string;
  name: string;
  synopsis: string;
  runtime: string;
  released: string;
  isLoading: boolean;
}

const CardDetails: React.FunctionComponent<ICardDetails> = ({
  rating,
  netflixid,
  name,
  synopsis,
  runtime,
  released,
  isLoading
}) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <PosedDetails
      onClick={(ev: React.MouseEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
        setShowMore(true);
      }}
      initialPose={"hide"}
      pose={showMore ? "show" : "hide"}
      show={showMore}
    >
      <DetailsHeader>
        {rating && Number(rating) > 0 && (
          <RatingWrapper>
            <Rating rating={rating} />
          </RatingWrapper>
        )}
        <StarsWrapper>
          <Stars rating={rating} key={netflixid} />
        </StarsWrapper>
        {!showMore && (
          <ExpandButton>
            <ExpandSVG />
          </ExpandButton>
        )}
      </DetailsHeader>
      {showMore && (
        <PosedMoreDetails initialPose="exit" pose="enter">
          <Title>{name}</Title>
          <Synopsis>{decodeURIComponent(synopsis)}</Synopsis>
          <Runtime>Runtime: {runtime}</Runtime>
          <Released>Release Date: {released}</Released>
          <Button
            onClick={(ev: any) => {
              ev.stopPropagation();
              ev.preventDefault();
              setShowMore(false);
            }}
          >
            <CloseSVG />
          </Button>
        </PosedMoreDetails>
      )}
    </PosedDetails>
  );
};

export default CardDetails;
