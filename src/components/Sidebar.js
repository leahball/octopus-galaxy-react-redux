import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.div`
  background-color: ${(p) => p.theme.lightOcean};
  display: block;
  width: 25%;
`;

const Sidebar = () => {
  return <StyledSidebar></StyledSidebar>;
};

export default Sidebar;
