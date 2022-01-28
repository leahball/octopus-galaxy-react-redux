import React from "react";
import styled from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import { lightOcean, lightRed, midOcean, midRed } from "../theme/Colors";
import { Logo } from "../theme/Logo";

const HeaderWrapper = styled.header`
  background-color: ${lightRed};
  display: flex;
`;

const HeaderLogo = styled(Logo)`
  text-align: left;
  color: ${midOcean};
  font-size: 3rem;
  padding: 2%;
  grid-area: "logo";
`;

const Menu = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0px;
  padding: 0;
  box-sizing: border-box;
  border-bottom: 2px solid ${midOcean};

  @media (min-width: 768px) {
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 8% auto auto;
    background: none;
    left: initial;
    top: initial;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 1% 6%;
  display: block;
  text-align: left;
  box-sizing: border-box;
  margin: 0 0;
  font-family: "Poppins";
  color: ${midOcean};
  font-weight: ${(p) => (p.isActive ? 600 : 300)};
  background-color: ${(p) => (p.isActive ? "white" : "#EFF3FF")};

  @media (min-width: 768px) {
    background-color: ${lightRed};
  }
`;

export function Header() {
  const { pathname } = useLocation();
  return (
    <HeaderWrapper>
      <HeaderLogo>Octopus Galaxy</HeaderLogo>
      <Menu>
        <StyledLink to="/" isActive={pathname === "/"}>
          home
        </StyledLink>
        <StyledLink to="/news" isActive={pathname === "/news"}>
          news
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === "/login"}>
          login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
