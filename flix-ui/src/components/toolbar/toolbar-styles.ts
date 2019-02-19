import styled from "styled-components";

export const ToolbarNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0;
  padding: 0.25rem;
  flex-wrap: wrap;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.45);
  border-radius: 6px;
  background: #373737;
`;

export const ToolbarList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  width: 100%;
`;

export const ToolbarListItem = styled.li`
  padding: 0.2rem 0;
  margin: 0 1rem;
  display: flex;
  align-items: center;
`;
