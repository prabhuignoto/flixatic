import * as React from "react";
import styled from "styled-components";

interface ITitle {
  title: string;
}

const Wrapper = styled.span`
  color: #fff;
  font-size: 0.9rem;
  white-space: nowrap;
  padding: 0.1rem 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CardTitle: React.FunctionComponent<ITitle> = ({ title }) => (
  <Wrapper>{title}</Wrapper>
);

export default CardTitle;
