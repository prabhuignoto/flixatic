import Posed from "react-pose";
import styled from "styled-components";
import posed from "react-pose";

export const Wrapper = styled.div`
  height: 100%;
`;

export const StyledImage = styled.img<{blur: boolean}>`
  border-radius: 4px;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const PosedImage = posed(StyledImage)({
  open: {
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      duration: 700,
      type: "spring",
      ease: "linear"
    }
  },
  close: {
    filter: "blur(4px)",
    opacity: 0.95
  }
})
