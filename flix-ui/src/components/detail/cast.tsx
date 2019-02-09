import * as React from "react";
import {
  CastWrapper,
  CastListWrapper,
  CastListTitle,
  CastList,
  CastListItem
} from "./cast.styles";

interface ICast {
  creator: string[];
  director: string[];
  actor: string[];
}

const FilmCast: React.FunctionComponent<ICast> = ({
  creator,
  director,
  actor
}) => (
  <CastWrapper>
    {actor.length > 0 && (
      <CastListWrapper>
        <CastListTitle>Actors</CastListTitle>
        <CastList>
          {actor.map(item => (
            <CastListItem>{item}</CastListItem>
          ))}
        </CastList>
      </CastListWrapper>
    )}
    {director.length > 0 && (
      <CastListWrapper>
        <CastListTitle>Director</CastListTitle>
        <CastList>
          {director.map(item => (
            <CastListItem>{item}</CastListItem>
          ))}
        </CastList>
      </CastListWrapper>
    )}
    {creator.length > 0 && (
      <CastListWrapper>
        <CastListTitle>Producers</CastListTitle>
        <CastList>
          {creator.map(item => (
            <CastListItem>{item}</CastListItem>
          ))}
        </CastList>
      </CastListWrapper>
    )}
  </CastWrapper>
);

export default FilmCast;
