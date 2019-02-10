import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 2px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const RatingWrapper = styled.div`
  margin-left: 0.5rem;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 35px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StarsWrapper = styled.div`
  margin-left: 0.5rem;
`;

export const DetailButton = styled.button<{ loading?: boolean }>`
  background: none;
  border: none;
  padding: 0.2rem;
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${p => (p.loading ? "rgba(0,0,0,0.6)" : "")};
  cursor: pointer;
  outline: none;
`;
