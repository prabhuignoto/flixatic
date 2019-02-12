import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1rem;
`;

export const StarWrapper = styled.div<{size?: string}>`
  width: ${p => p.size === "small" ? "1.1rem" : "1.5rem"};
  height: ${p => p.size === "small" ? "1.1rem" : "1.5rem"};
  position: relative;
`;
