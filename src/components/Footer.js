import React from "react";
import styled from "styled-components";
import { lightRed, midOcean } from "../theme/Colors";
import { Logo } from "../theme/Logo";

const NavbarStyled = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0px;
  background-color: ${midOcean};
  padding: 15px 40px;
`;

const HeaderLogo = styled(Logo)`
  text-align: left;
  color: ${lightRed};
  font-size: 2rem;
`;

export function Footer() {
  return (
    <NavbarStyled>
      <HeaderLogo>created by Leah Ball</HeaderLogo>
    </NavbarStyled>
  );
}
