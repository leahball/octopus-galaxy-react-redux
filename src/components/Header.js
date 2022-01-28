import React from "react";
import styled from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import { lightRed, midOcean } from "../theme/Colors";
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
  /* grid-area: "nav"; */
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 8% auto auto;
  font-family: "open-sans";
  background: none;
  left: initial;
  top: initial;
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 2% 4%;
  display: block;
  text-align: left;
  box-sizing: border-box;
  margin: auto 0;
  font-family: "Poppins";
  color: ${midOcean};
  font-weight: ${(p) => (p.isActive ? 600 : 300)};
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
