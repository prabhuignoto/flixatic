import styled from "styled-components";

export const ImageGalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.25rem;
  margin-bottom: 0.5rem;
  border-radius: 3px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 90%;
  margin: 0.25rem 0;
`;

export const BoxartWrapper = styled(ImageWrapper)``;
export const LogoWrapper = styled(ImageWrapper)``;
export const BillboardWrapper = styled(ImageWrapper)``;
export const BackgroundWrapper = styled(ImageWrapper)``;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;