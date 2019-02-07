import styled from "styled-components";

export const TabWrapper = styled.div`
  flex: 1;
  margin-left: 1rem;
  height: 100%;
`;

export const TabHead = styled.li<{ selected: boolean }>`
  color: #fff;
  padding: 0.6rem 0.65rem;
  background: ${p => (p.selected ? "#1d1d1d" : "")};
  margin: 0 0.25rem;
  min-width: 50px;
  border: 1px solid #3c3c3c;
  border-bottom: none;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
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
  min-height: 280px;
  background: #1d1d1d;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
