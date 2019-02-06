import * as React from "react";
import { Wrapper, DetailButton } from "./card.style";
import Image from "./image";
import { ICard } from "../../types";
import Posed from "react-pose";
import CardDetails from "./card-details";
import { ReactComponent as PlusSVG } from "../../assets/plus.svg";
import { ReactComponent as LoadingSVG } from "../../assets/rolliong.svg";
import { ReactComponent as ErrorSVG } from "../../assets/exclamation.svg";

const PosedWrapper = Posed(Wrapper)({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  },
  focus: {
    color: "red"
  }
});

export const FlixCard: React.FunctionComponent<ICard> = ({
  image,
  rating,
  title,
  netflixid,
  synopsis,
  released,
  runtime,
  openDetailedView,
  loadingDetailedView,
  isLoading,
  dataLoadFailed
}) => {
  const [hover, setHover] = React.useState(false);
  return (
    <PosedWrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={netflixid}
    >
      <Image url={image} title={title} blur={isLoading} />
      <CardDetails
        rating={rating}
        netflixid={netflixid}
        synopsis={synopsis}
        name={title}
        runtime={runtime}
        released={released}
      />
      {
        <DetailButton
          title={
            dataLoadFailed
              ? "Failed to fetch the Movie info. Please try again later"
              : ""
          }
          onClick={() => {
            if (!dataLoadFailed) {
              loadingDetailedView(netflixid);
              // openDetailedView(netflixid);
            }
          }}
        >
          {isLoading && <LoadingSVG />}
          {!isLoading && !dataLoadFailed && <PlusSVG />}
          {dataLoadFailed && <ErrorSVG />}
        </DetailButton>
      }
    </PosedWrapper>
  );
};
