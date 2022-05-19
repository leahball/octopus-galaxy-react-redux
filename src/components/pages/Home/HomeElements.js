import styled from "styled-components";
import { Logo } from "../../../theme/Logo";

export const HomeWrapper = styled.div`
  background-color: ${(p) => p.theme.lightRed};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4%;
  padding: 3% 6%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1% 1%;
  }
`;

export const HomeSidebar = styled.aside`
  display: grid;
  grid-column: 1;
  grid-row: 1;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  min-height: 450px;
`;

export const HomeH = styled(Logo)`
  font-size: 6rem;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${(p) => p.theme.midOcean};
`;

export const HomeP = styled.p`
  font-size: 2.4rem;
  color: ${(p) => p.theme.darkOcean};
`;

export const OctopusImageWrapper = styled.img`
  background-image: center;
  top: 0;
  right: 0;
  display: grid;
  grid-column: 2 / span 2;
  max-width: 700px;
`;
