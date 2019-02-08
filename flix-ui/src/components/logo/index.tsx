import * as React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  color: #FFC30B;
  margin-right: auto;
  text-shadow: 3px 4px 10px rgba(0,0,0,0.95);
  text-transform: uppercase;
`;

const LogoView: React.FunctionComponent = () => (
  <Logo>Flixatic</Logo>
);

export default LogoView;
