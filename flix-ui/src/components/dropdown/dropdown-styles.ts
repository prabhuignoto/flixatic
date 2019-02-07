import styled from "styled-components";

export const DropdownWrapper = styled.div`
  height: 35px;
  min-width: 100px;
  max-width:200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin: 1rem 0;
  background: #1d1d1d;
  border: 2px solid #272727;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.1);
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  position: absolute;
  top: 40px;
  min-height: 100px;
  width: 100%;
  z-index: 100;
  border-radius: 4px;
  background: #1d1d1d;
  border: 1px solid #272727;
  display: flex;
  align-items: flex-start;
`;

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
  padding-left: 0.2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: left;
  color: #fff;
  &:hover {
    background: #ffbf00;
    color: #000;
  }
`;

export const ArrowWrapper = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
`;
