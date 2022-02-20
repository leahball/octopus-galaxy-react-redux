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
  justify-content: center;
  min-height: 450px;
`;

export const DirectionIcon = styled.img`
  background-image: cover center;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  /* height: 220px; */
`;

export const DirectionsH = styled(Logo)`
  font-size: 3rem;
  margin-bottom: 20px;
  color: ${(p) => p.theme.midOcean};
`;

export const DirectionsP = styled.p`
  font-size: 1.6rem;
  color: ${(p) => p.theme.darkInk}
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
    color: ${(p) => p.theme.darkOcean}
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
