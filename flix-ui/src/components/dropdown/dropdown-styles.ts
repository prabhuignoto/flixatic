import Posed from "react-pose";
import styled from "styled-components";
import { scale } from "style-value-types";

export const DropdownWrapper = styled.div`
  height: 35px;
  min-width: 200px;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin: 1rem 0;
  background: #1d1d1d;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
  padding: 0.25rem;
  user-select: none;
  cursor: pointer;
  /* border: 1px solid #272727; */
`;

export const ListWrapper = styled.div`
  align-items: flex-start;
  background: #1d1d1d;
  border-radius: 4px;
  border: 1px solid #272727;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.7);
  display: flex;
  left: 0;
  min-height: 100px;
  position: absolute;
  top: 50px;
  width: 100%;
  z-index: 100;
`;

export const PosedListWrapper = Posed(ListWrapper)({
  open: {
    opacity:1
  },
  close: {
    opacity:0,
  }
});

export const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`;

export const DropdownVal = styled.span`
  color: #ffbf00;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.5rem;
`;

export const DropdownListItem = styled.li`
  width: 100%;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-align: left;
  color: #fff;
  &:hover {
    background: #ffbf00;
    color: #000;
  }
`;

export const DropdownListItemVal = styled.span`
  margin-left: 1.25rem;
`;

export const ArrowWrapper = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
`;
