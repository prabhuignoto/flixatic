import * as React from "react";
import styled from "styled-components";
import { ReactComponent as LoadingSVG } from "../../assets/rolling.svg";

const LoaderWrapper = styled.div`
  width: 4rem;
  height: 5rem;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid red;
`;

const Loader: React.FunctionComponent = () => (
  <LoaderWrapper>
    <LoadingSVG />
  </LoaderWrapper>
);

export default Loader;
