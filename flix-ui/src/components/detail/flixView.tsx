import * as React from "react";
import {
  FlixWrapper,
  FlixImageWrapper,
  FlixImage,
  FlixImageLoadWrapper,
  FlixImageSliders,
  FlixImageControls
} from "./styles/flix.styles";
import { ReactComponent as LoadingSVG } from "../../assets/rolling.svg";

interface IFlixView {
  image1: string;
  image2: string;
}

const FlixView: React.FunctionComponent<IFlixView> = ({ image1, image2 }) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <FlixWrapper>
      <FlixImageWrapper>
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
    </FlixWrapper>
  );
};

export default FlixView;
