import * as React from "react";
import {
  CastWrapper,
  CastListWrapper,
  CastListTitle,
  CastList,
  CastListItem
} from "./styles/cast.styles";

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
          {actor && actor.map(item => (
            <CastListItem>
              <a href={`https://www.google.com/search?q=${item}`} target="_new">
                {item}
              </a>
            </CastListItem>
          ))}
        </CastList>
      </CastListWrapper>
    )}
    {director.length > 0 && (
      <CastListWrapper>
        <CastListTitle>Director</CastListTitle>
        <CastList>
          {director && director.map(item => (
            <CastListItem>
              <a href={`https://www.google.com/search?q=${item}`} target="_new">
                {item}
              </a>
            </CastListItem>
          ))}
        </CastList>
      </CastListWrapper>
    )}
    {creator.length > 0 && (
      <CastListWrapper>
        <CastListTitle>Producers</CastListTitle>
        <CastList>
          {creator && creator.map(item => (
            <CastListItem>
              <a href={`https://www.google.com/search?q=${item}`} target="_new">
                {item}
              </a>
            </CastListItem>
          ))}
        </CastList>
      </CastListWrapper>
    )}
  </CastWrapper>
);

export default FilmCast;
