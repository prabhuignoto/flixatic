import * as React from "react";
import {
  FlixWrapper,
  FlixImageWrapper,
  FlixImage,
  FlixImageLoadWrapper,
  FlixImageSliders,
  FlixImageControls,
  PosedFlixWrapper,
  PosedFlixImage
} from "./styles/image.styles";
import { ReactComponent as LoadingSVG } from "../../assets/rolling.svg";

interface IFlixView {
  image1: string;
  image2: string;
  minimize: boolean;
  base64: string;
  netflixid: string;
}

const FlixView: React.FunctionComponent<IFlixView> = ({
  image1,
  image2,
  minimize,
  base64,
  netflixid
}) => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <PosedFlixWrapper
      pose={minimize ? "minimize" : "maximize"}
      initialPose={"maximize"}
    >
      <FlixImageWrapper minimize={minimize}>
        <PosedFlixImage
          src={loaded ? image1 : `data:image/jpeg;base64,${base64}`}
          loading={!loaded}
          initialPose="close"
          key={netflixid}
          pose={loaded ? "open" : ""}
        />
        <img
          style={{ display: "none" }}
          onLoad={() => setLoaded(true)}
          src={image1}
        />
        {!loaded && (
          <FlixImageLoadWrapper>
            <LoadingSVG />
          </FlixImageLoadWrapper>
        )}
      </FlixImageWrapper>
    </PosedFlixWrapper>
  );
};

export default FlixView;
