import styled from "styled-components";

export const FlixWrapper = styled.div`
  position: relative;
  min-height: 250px;
  flex: 1;
`;

export const FlixImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  margin-right: 0.25rem;
  box-shadow: inset 0px 0px 20px 1px rgba(0, 0, 0, 0.75);
  border: 2px solid rgba(255, 191, 0, 0.5);
`;

export const FlixImageLoadWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
`;

export const FlixImage = styled.img<{ loading: boolean }>`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: 0% 0%;
  display: ${p => (p.loading ? "none" : "block")};
`;

export const FlixTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #ffbf00;
  text-align: left;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
`;

export const FlixStarsWrapper = styled.div`
  padding: 0.2rem;
  width: 150px;
`;
