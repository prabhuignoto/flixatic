import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  @media (min-width: 1200px) {
    grid-template-columns: repeat(7, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(6, 1fr);
  }
  grid-auto-rows: 300px;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
`;
