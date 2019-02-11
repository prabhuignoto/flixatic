import * as React from "react";
import {
  Container,
  ImageGalleryWrapper,
  BoxartWrapper,
  LogoWrapper,
  BackgroundWrapper,
  Image
} from "./styles/imageGallery.styles";

interface IGalleryItem {
  type: string;
  width: string;
  height: string;
  url: string;
}

interface IGallery {
  items: IGalleryItem[];
}

const ImageGallery: React.FunctionComponent<IGallery> = ({ items }) => {
  const boxArts = items.filter(x => x.type === "boxart");
  const logos = items.filter(x => x.type === "logo");
  const backgrounds = items.filter(x => x.type === "background");
  return (
    <ImageGalleryWrapper>
      {/* <Container>
        {boxArts.map(x => (
          <BoxartWrapper>
            <Image src={x.url} />
          </BoxartWrapper>
        ))}
      </Container> */}
      <Container>
        {logos.map(logo => (
          <LogoWrapper>
            <Image src={logo.url} />
          </LogoWrapper>
        ))}
      </Container>
      <Container>
        {backgrounds.map(background => (
          <BackgroundWrapper>
            <Image src={background.url} />
          </BackgroundWrapper>
        ))}
      </Container>
    </ImageGalleryWrapper>
  );
};

export default ImageGallery;
