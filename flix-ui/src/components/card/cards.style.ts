import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 240px;
  grid-column-gap: 25px;
  grid-row-gap: 30px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
