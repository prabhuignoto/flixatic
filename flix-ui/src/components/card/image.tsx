import * as React from "react";
import { Wrapper, StyledImage } from "./image.style";

interface IImage {
  url: string;
  title: string;
  blur: boolean;
}

const CardImage: React.FunctionComponent<IImage> = ({ url, title, blur }) => (
  <Wrapper>
    <StyledImage
      src={url}
      alt={title}
      // pose={blur ? "focus" : "close"}
      // initialPose={"close"}
      blur={blur}
    />
  </Wrapper>
);

export default CardImage;
