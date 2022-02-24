import styled from "styled-components";
import { Logo } from "../../../theme/Logo";

export const NewsWrapper = styled.div`
  background-color: ${(p) => p.theme.lightOcean};
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

export const NewsH = styled(Logo)`
    font-size: 3rem;
    color: ${(p) => p.theme.darkOcean}
`