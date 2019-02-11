import * as React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import ImageGallery from "../components/detail/imageGallery";
import styled from "styled-components";
import { ReactComponent as LoadingSVG } from "../assets/rolling.svg";

const LoaderWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const GalleryQuery = gql`
  query getPosters($flixId: String!) {
    getPosters(flixId: $flixId) {
      type
      url
      height
      width
    }
  }
`;

interface IImageGallery {
  flixId: string;
}

const Gallery: React.FunctionComponent<IImageGallery> = ({ flixId }) => (
  <Container>
    <Query query={GalleryQuery} variables={{ flixId }}>
      {({ loading, data, error }) => {
        if (loading) {
          return(
          <LoaderWrapper>
            <LoadingSVG />
          </LoaderWrapper>);
        }

        if (!loading && data && data.getPosters) {
          return <ImageGallery items={data.getPosters} />;
        }

        if (error) {
          return <span>Failed to load</span>;
        }
      }}
    </Query>
  </Container>
);

export default Gallery;
