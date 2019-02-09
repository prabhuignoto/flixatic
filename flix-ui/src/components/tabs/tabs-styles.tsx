import styled from "styled-components";

export const TabWrapper = styled.div`
  flex: 2;
  margin-left: 1rem;
  height: 100%;
`;

export const TabHead = styled.li<{ selected: boolean }>`
  color: #fff;
  padding: 0.4rem 0.65rem;
  background: ${p => (p.selected ? "#1d1d1d" : "")};
  &:not(:first-child) {
    margin: 0 0.25rem;
  }
  min-width: 50px;
  border: ${p => p.selected ? "1px solid rgba(255, 191, 0, 0.5)" : "1px solid #3c3c3c"};
  border-bottom: none;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  user-select: none;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${p => p.selected ? "#1d1d1d" : "rgba(255, 191, 0, 0.1)" };
    bottom: -1px;
    left: 0;
    z-index: 10;
  };
`;

export const TabHeads = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0;
  min-width: 80px;
`;

export const TabBody = styled.div`
  border: 1px solid #272727;
  border-top: none;
  color: #fff;
  height: 365px;
  overflow-y: auto;
  background: #1d1d1d;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px solid rgba(255, 191, 0, 0.5);
  box-shadow: 0 -1px 10px 1px rgba(0,0,0,0.5);
`;
