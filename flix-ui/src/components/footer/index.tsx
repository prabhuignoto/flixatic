import * as React from "react";
import styled from "styled-components";
import { ReactComponent as GithubSVG } from "../../assets/github.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as HeartSVG } from "../../assets/heart.svg";

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
  padding: 0.5rem 0.2rem;
  margin-top: 3rem;
`;

const CopyRights = styled.div`
  color: #e2e2e2;
  font-size: 1rem;
  margin-left: 2rem;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialWrapper = styled.a`
  width: 1.75rem;
  height: 1.75rem;
  position: relative;
  margin: 0 0.5rem;
`;

const Icon = styled.i`
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
  display: block;
  margin-left: 0.5rem;
`;


const Footer: React.FunctionComponent = () => (
  <FooterWrapper>
    <Social>
      <SocialWrapper href="https://github.com/prabhuignoto" target="_new">
        <GithubSVG />
      </SocialWrapper>
      <SocialWrapper href="https://twitter.com/prabhumurthy2" target="_new">
        <Twitter />
      </SocialWrapper>
    </Social>
    <div style={{ marginLeft: "auto", display: "flex", color: "#fff" }}>
      Designed &amp; developed with{" "}
      <Icon>
        <HeartSVG />
      </Icon>
    </div>
    <CopyRights>2019 &copy; Prabhu Murthy</CopyRights>
  </FooterWrapper>
);

export default Footer;
