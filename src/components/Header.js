import React, { useState } from "react";
import styled from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import { Logo } from "../theme/Logo";

// ${(p) => p.theme.lightRed}

const HeaderWrapper = styled.header`
  background-color: white;
  display: flex;
`;

const HeaderLogo = styled(Logo)`
  text-align: left;
  color: ${(p) => p.theme.midOcean};
  font-size: 3rem;
  padding: 2%;
  grid-area: "logo";
`;

const Menu = styled.div`
  display: ${(p) => (p.open ? "block" : "none")};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0px;
  padding: 0;
  box-sizing: border-box;
  border-bottom: 2px solid ${(p) => p.theme.midOcean};

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
  color: ${(p) => p.theme.midOcean};
  font-weight: ${(p) => (p.isActive ? 600 : 300)};
  background-color: ${(p) => (p.isActive ? "#EFF3FF" : "white")};

  @media (min-width: 768px) {
    background-color: white;
  }
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 45px;
  min-width: 25px;
  padding: 10px;
  > div {
    height: 3px;
    background: ${(p) => p.theme.midOcean};
    margin: 5px 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderLogo>Octopus Galaxy</HeaderLogo>
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === "/"}>
          home
        </StyledLink>
        <StyledLink to="/news" isActive={pathname === "/news"}>
          news
        </StyledLink>
        <StyledLink to="/play" isActive={pathname === "/play"}>
          play
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === "/login"}>
          login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
