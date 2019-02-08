import * as React from "react";
import {
  FlixWrapper,
  FlixImageWrapper,
  FlixImage,
  FlixImageLoadWrapper
} from "./flix.styles";
import { ReactComponent as LoadingSVG } from "../../assets/rolliong.svg";

interface IFlixView {
  image1: string;
}

const FlixView: React.FunctionComponent<IFlixView> = ({ image1 }) => {
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
