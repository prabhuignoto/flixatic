import styled from "styled-components";

export const RadioGroupWrapper = styled.div`
`;

export const RadioGroupList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  `;

export const RadioGroupListItem = styled.li<{selected?: boolean}>`
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: capitalize;
  color: #fff;
  position: relative;
  font-size: 1.1rem;
  margin-right: 0.5rem;
  user-select: none;
  box-shadow: ${p => p.selected ? "inset 0 0 10px 1px rgba(0,0,0,0.5)" : ""};
  border-radius: ${p => p.selected ? "20px": ""};

  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "";
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    box-shadow: ${p => !p.selected ? "inset 0px 0px 10px 1px rgba(0,0,0,0.75)" : "0px 0px 10px 1px rgba(0,0,0,0.75)"};
    background: ${p => p.selected ? "#ffc30b" : ""};
  }
  &::after {
    content: "";
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 50%;
    position: absolute;
    left: 0.55rem;
    display: ${p => p.selected ? "block" : "none"};
  }
`;