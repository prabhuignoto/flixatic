import styled from "styled-components";

export const CastWrapper = styled.div`
  padding: 0.5rem;
  width: 100%;
  overflow-x: hidden;
`;

export const CastListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

export const CastListTitle = styled.span`
  color: #FFC30B;
  font-size: 1rem;
  font-weight: 500;
`;

export const CastList = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  flex-wrap: wrap;
  padding: 0.2rem;
  margin-top: 0.35rem;
`;

export const CastListItem = styled.li`
  padding: 0.25rem;
  white-space: nowrap;
  margin: 0.25rem 0.25rem 0 0;
  font-size: 0.9rem;
  border: 1px solid #3c3c3c;
  border-radius: 3px;
  &:hover {
    background: #3c3c3c;
    color: #000;
  }
  &>a {
    text-decoration: none;
    color: #fff;
  }
`;