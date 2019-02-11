import * as React from "react";
import {
  FlixWrapper,
  FlixImageWrapper,
  FlixImage,
  FlixImageLoadWrapper,
  FlixImageSliders,
  FlixImageControls,
  PosedFlixWrapper
} from "./styles/image.styles";
import { ReactComponent as LoadingSVG } from "../../assets/rolling.svg";

interface IFlixView {
  image1: string;
  image2: string;
  minimize: boolean;
}

const FlixView: React.FunctionComponent<IFlixView> = ({
  image1,
  image2,
  minimize
}) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <PosedFlixWrapper pose={minimize ? "minimize" : "maximize"} initialPose={"maximize"}>
      <FlixImageWrapper minimize={minimize}>
        <FlixImage
          src={image1}
          onLoad={() => setLoading(false)}
          loading={loading}
        />
        {loading && (
          <FlixImageLoadWrapper>
            <LoadingSVG />
          </FlixImageLoadWrapper>
        )}
      </FlixImageWrapper>
    </PosedFlixWrapper>
  );
};

export default FlixView;
