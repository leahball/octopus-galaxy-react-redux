import styled from "styled-components";
import { Logo } from "../../../theme/Logo";

export const NewsCard = styled.div`
  background-color: ${(p) => p.theme.lightOcean};
  /* border: 1px solid ${(p) => p.theme.midOcean}; */
  margin: 0 auto;
  padding: 3% 6%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1% 1%;
  }
`;

export const NewsContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  height: 240px;
  padding: 20px;
  border: 1px solid ${(p) => p.theme.midOcean};
  border-radius: 5px;
  margin: 20px;
`;

export const NewsI = styled.img`
  grid-column: 1 / 2;
  display: block;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
`;

export const NewsTextWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: span 4;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NewsH = styled(Logo)`
  font-size: 2.6rem;
  color: ${(p) => p.theme.darkOcean};
  a:hover {
    cursor: pointer;
    background-color: white;
  }
`;

export const NewsDesc = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  padding-top: 10px;
`;

export const Byline = styled.p`
  font-size: 1.3rem;
  color: white;
  background-color: ${(p) => p.theme.midOcean};
  padding: 5px;
  margin-bottom: 20px;
`;
