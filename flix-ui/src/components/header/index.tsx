import * as React from "react";
import styled from "styled-components";
import LogoView from "../logo";
import CountryDropdown from "../../containers/CountryDropdown";

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
    <CountryDropdown
      items={[
        { value: "United States", id: "US" },
        { value: "United Kingdom", id: "GB" },
        { value: "India", id: "IN" },
        { value: "Germany", id: "DE" },
        { value: "Japan", id: "JP" },
        { value: "Australia", id: "AU" }
      ]}
      title={"Choose a country"}
    />
  </Header>
);

export default HeaderView;