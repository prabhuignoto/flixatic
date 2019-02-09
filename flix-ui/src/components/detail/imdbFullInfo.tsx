import React from "react";
import { IImdbFullInfo } from "../../types";
import AttributeView from "./attributeView";
import { ImdbFullInfoWrapper } from "./imdbFullInfo.styles";

const ImdbFullInfo: React.FunctionComponent<IImdbFullInfo> = ({
  tomatoFresh,
  tomatoConsensus,
  tomatoRotten,
  imdbrating,
  imdbvotes,
  genre,
  metascore,
  country,
  date,
  plot,
  type,
  tomatoMeter,
  awards,
  language,
  poster,
  rated,
  released,
  tomatoRating,
  tomatoReviews,
  tomatoUserMeter,
  tomatoUserRating,
  runtime,
  tomatoUserReviews
}) => (
  <ImdbFullInfoWrapper>
    <AttributeView title="IMDB Rating" value={imdbrating} />
    <AttributeView title="IMDB Votes" value={imdbvotes} />
    <AttributeView title="Plot" value={plot} direction="column" />
    <AttributeView title="IMDB Rating" value={imdbrating} />
    <AttributeView title="Runtime" value={runtime} />
    <AttributeView title="Released" value={released} />
    <AttributeView title="Rated" value={rated} />
    <AttributeView title="Tomato Rating" value={tomatoRating} />
    <AttributeView title="Tomato Meter" value={tomatoMeter} />
    <AttributeView title="Language" value={language} />
    <AttributeView title="Country" value={country} />
  </ImdbFullInfoWrapper>
);

export default ImdbFullInfo;
