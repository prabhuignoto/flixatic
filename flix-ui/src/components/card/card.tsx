import * as React from "react";
import { Wrapper, DetailButton } from "./styles/card.style";
import Image from "./image";
import Posed from "react-pose";
import CardDetails from "./card-details";
import { ReactComponent as LoadingSVG } from "../../assets/rolling.svg";
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
  counterId: number;
  base64: string;
}

export default class FlixCard extends React.Component<
  IProps,
  {
    hover: boolean;
    gridSpan: {
      start: number;
      end: number;
      enable: boolean;
    };
  }
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      gridSpan: {
        end: props.counterId,
        start: props.counterId,
        enable: false
      },
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  shouldComponentUpdate = (nextProps: IProps, nextState: any) => {
    if (
      nextProps.activeFlixId === String(this.props.netflixid) ||
      nextState.hover !== this.state.hover
    ) {
      return true;
    } else {
      return false;
    }
  };

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

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
      loadingDetailedView,
      base64,
      counterId
    } = this.props;
    return (
      <PosedWrapper
        key={netflixid}
        onClick={() => {
          if (!dataLoadFailed) {
            loadingDetailedView(netflixid);
          }
        }}
        start={this.state.gridSpan.start}
        end={this.state.gridSpan.end}
        enable={this.state.gridSpan.enable}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <Image
          url={image}
          fallback={`data:image/jpeg;base64,${base64}`}
          title={title}
          blur={isLoading}
          />
        {this.state.hover && (
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
        {/* <button
          onClick={(ev: React.MouseEvent) => {
            ev.preventDefault();
            ev.stopPropagation();
            this.setGridSpan(
              this.state.gridSpan.start,
              this.state.gridSpan.start + 2
            );
          }}
        >expand</button> */}
        {
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
        }
      </PosedWrapper>
    );
  }
}
