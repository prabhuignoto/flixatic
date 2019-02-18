import * as React from "react";
import styled from "styled-components";
import { ReactComponent as FilmSVG } from "../../assets/film.svg";

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  color: #ffc30b;
  margin-right: auto;
  text-shadow: 3px 4px 10px rgba(0, 0, 0, 0.95);
`;

const LogoImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  margin-right: 0.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const LogoView: React.FunctionComponent = () => (
  <LogoContainer>
    <LogoImage>
      <FilmSVG />
    </LogoImage>
    <Logo>FLIXATIC</Logo>
  </LogoContainer>
);

export default LogoView;
