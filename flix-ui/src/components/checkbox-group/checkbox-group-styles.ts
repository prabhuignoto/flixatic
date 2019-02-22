import styled from "styled-components";
import posed from "react-pose";

export const CheckboxButton = styled.button<{ open?: boolean }>`
  background: none;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 3px;
  font-size: 1.1rem;
  height: 40px;
  background: #1d1d1d;
  box-shadow: ${p =>
    !p.open
      ? "0px 0px 5px 1px rgba(0, 0, 0, 0.9)"
      : "inset 0px 0px 5px 1px rgba(0, 0, 0, 0.9)"};
  color: #ffbf00;
  outline: none;
  cursor: pointer;
`;

export const CheckboxWrapper = styled.div`
  padding: 0.5rem;
  position: relative;
`;

export const CheckboxList = styled.ul`
  padding:1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  left: 10px;
  list-style: none;
  position: absolute;
  top: 54px;
  width: 100%;
  min-width: 600px;
  min-height: 200px;
  max-height: 300px;
  z-index: 999;
  background: #1d1d1d;
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.8);
  border-radius: 4px;
  outline: none;
`;

export const PosedCheckBoxList = posed(CheckboxList)({
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0.8,
  }
});

export const CheckboxListItem = styled.li<{selected?: boolean}>`
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  margin: 0.3rem 0;
  font-size: 1rem;
  color: ${p => p.selected ? "#ffc30b" : "#fff"};
  font-weight: ${p => p.selected ? "500" : "normal"};
  cursor: pointer;
  &:before {
    content: "";
    margin-left: 0.2rem;
    margin-right: 0.5rem;
    background: ${p => p.selected ? "#ffc30b" : ""};
    box-shadow: ${p => !p.selected ? "inset 0 1px 16px 1px rgba(0,0,0,0.95)" : ""};
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  position: relative;
`;


export const CheckIcoWrapper = styled.i`
  display: block;
  width: 28px;
  height: 28px;
  position: absolute;
  left: -1px;
`;