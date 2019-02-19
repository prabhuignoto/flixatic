import * as React from "react";
import styled from "styled-components";
import LogoView from "../logo";
import CountryDropdown from "../../containers/CountryDropdown";
// import RadioGroup from "../../components/radio-group";
import RadioGroupTitleType from "../../containers/filterByType";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  height: 60px;
  margin-bottom: 1rem;
`;

const HeaderView: React.FunctionComponent = () => (
  <Header>
    <LogoView />
  </Header>
);

export default HeaderView;
