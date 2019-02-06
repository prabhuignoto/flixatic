import Posed from "react-pose";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
`;

export const StyledImage = styled.img<{blur: boolean}>`
  border-radius: 4px;
  object-fit: contain;
  width: 100%;
  height: 100%;
  filter: ${p => p.blur ? "blur(2px)" : ""};
`;
