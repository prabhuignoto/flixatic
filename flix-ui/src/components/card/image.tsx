import * as React from "react";
import { Wrapper, StyledImage, PosedImage } from "./styles/image.style";
import LazyLoad from "react-lazyload";

interface IImage {
  url: string;
  title: string;
  blur: boolean;
  fallback: string;
}

const CardImage: React.FunctionComponent<IImage> = ({
  url,
  title,
  blur,
  fallback
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <Wrapper>
      <>
        <PosedImage
          src={imageLoaded ? url : fallback}
          alt={title}
          blur={!imageLoaded}
          initialPose="close"
          pose={imageLoaded ? "open" : "close"}
        />
        <img
          style={{ display: "none" }}
          src={url}
          onLoad={() => setImageLoaded(true)}
        />
      </>
    </Wrapper>
  );
};

export default CardImage;
