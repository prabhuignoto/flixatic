import * as React from "react";
import { Wrapper, StyledImage } from "./styles/image.style";
import LazyLoad from "react-lazyload";

interface IImage {
  url: string;
  title: string;
  blur: boolean;
}

const CardImage: React.FunctionComponent<IImage> = ({ url, title, blur }) => (
  <Wrapper>
    <LazyLoad height={100}>
      <StyledImage
        src={url}
        alt={title}
        blur={blur}
      />
    </LazyLoad>
  </Wrapper>
);

export default CardImage;
