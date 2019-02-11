import * as React from "react";
import { Query } from "react-apollo";
import {gql} from "apollo-boost";
import ImageGallery from "../components/detail/imageGallery";

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
  <Query query={GalleryQuery} variables={{ flixId }}>
    {({ loading, data, error }) => {
      if (loading) {
        return <span>Loading</span>;
      }

      if (!loading && data && data.getPosters) {
        return <ImageGallery items={data.getPosters} />;
      }

      if (error) {
        return <span>Failed to load</span>;
      }
    }}
  </Query>
);

export default Gallery;