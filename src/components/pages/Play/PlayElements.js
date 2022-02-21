import styled from "styled-components";
import { Logo } from "../../../theme/Logo";

export const GameLayout = styled.div`
  background-color: ${(p) => p.theme.lightOcean};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4%;
  padding: 3% 6%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1% 1%;
  }
`;

export const GameSidebar = styled.aside`
  display: grid;
  grid-column: 1;
  grid-row: 1;
`;
export const DirectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  min-height: 450px;
`;

export const DirectionIcon = styled.img`
  background-image: cover center;
  width: 60%;
  padding: 3%;
`;

export const DirectionsH = styled(Logo)`
  font-size: 4rem;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${(p) => p.theme.midOcean};
  text-decoration: overline;
  text-decoration-style: wavy;
  text-decoration-color: ${(p) => p.theme.midRed};
`;

export const DirectionsP = styled.p`
  font-size: 1.6rem;
  color: ${(p) => p.theme.darkInk};
  background-color: white;
  padding: 5%;
  border-radius: 20px;
`;
export const GameWrapper = styled.div`
  display: grid;
  grid-column: 2 / span 2;
`;

export const TurnWrapper = styled.div`
  display: flex;
  padding: 2%;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 4rem;
    color: ${(p) => p.theme.darkOcean};
  }
  h3 {
    font-size: 2rem;
    font-weight: 400;
    background-color: white;
    padding: 1% 2%;
    border-radius: 8px;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

export const Directions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10% 12%;
`;
