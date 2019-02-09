import * as React from "react";
import { Wrapper, DetailButton } from "./card.style";
import Image from "./image";
import { ICard } from "../../types";
import Posed from "react-pose";
import CardDetails from "./card-details";
import { ReactComponent as OpenSVG } from "../../assets/open.svg";
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

interface IProps {
  image: string;
  rating: string;
  title: string;
  netflixid: string;
  synopsis: string;
  released: string;
  runtime: string;
  loadingDetailedView: (id: string) => void;
  isLoading: boolean;
  dataLoadFailed: boolean;
  activeFlixId: string;
}

export default class FlixCard extends React.Component<
  IProps,
  { hover: boolean }
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hover: false
    };
  }

  shouldComponentUpdate = (nextProps: IProps, nextState: any) => {
    if (
      nextProps.activeFlixId === String(this.props.netflixid) ||
      this.state.hover !== nextState.hover
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const {
      dataLoadFailed,
      image,
      isLoading,
      netflixid,
      rating,
      synopsis,
      title,
      released,
      runtime,
      loadingDetailedView
    } = this.props;
    return (
      <PosedWrapper
        key={netflixid}
        onClick={() => {
          if (!dataLoadFailed) {
            loadingDetailedView(netflixid);
          }
        }}
      >
        <Image url={image} title={title} blur={isLoading} />
        {!isLoading && (
          <CardDetails
            rating={rating}
            netflixid={netflixid}
            synopsis={synopsis}
            name={title}
            runtime={runtime}
            released={released}
            isLoading={isLoading}
          />
        )}
        {(
          <DetailButton
            title={
              dataLoadFailed
                ? "Failed to fetch the Movie info. Please try again later"
                : ""
            }
            loading={isLoading}
          >
            {isLoading && <LoadingSVG />}
            {/* {!isLoading && !dataLoadFailed && <OpenSVG />} */}
            {dataLoadFailed && <ErrorSVG />}
          </DetailButton>
        )}
      </PosedWrapper>
    );
  }
}
