import React from "react";
import styled from "styled-components";
import { Logo } from "../theme/Logo";

const NavbarStyled = styled.footer`
  width: 100%;
  bottom: 0px;
  background-color: ${(p) => p.theme.midOcean};
  padding: 15px 40px;
`;

const HeaderLogo = styled(Logo)`
  text-align: left;
  color: ${(p) => p.theme.lightRed};
  font-size: 1.5rem;
`;

export function Footer() {
  return (
    <NavbarStyled>
      <HeaderLogo>created by Leah Ball</HeaderLogo>
    </NavbarStyled>
  );
}
