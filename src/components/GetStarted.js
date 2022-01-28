import React from "react";
import styled from "styled-components";
import { lightRed, midOcean, darkOcean, darkInk } from "../theme/Colors";
import { Button } from "./common";

const Wrapper = styled.div`
  background-image: url("../Assets/Large/Strength.png");
  /* grid-template: 3fr 6fr;
  gap: 10px; */
`;

const SideBar = styled.div`
  width: 55%;
  min-height: 100vh;
  margin-left: 10%;
  padding-top: 5%;
  text-align: right;
  h2 {
    font-size: 3rem;
    line-height: 1.5;
    color: ${darkInk};
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 10%;
    background-color: rgba(254, 242, 239, 0.75);
    border-radius: 20px;
    padding: 4%;
  }
  @media only screen and (max-width: 420px) {
    padding-top: 10%;
    width: 80%;
    position: relative;
    z-index: 30;
    text-align: left;
    h2 {
      font-size: 2.8rem;
      z-index: 1;
    }
  }
`;

const GetStarted = () => {
  return (
    <Wrapper>
      <SideBar>
        <h2>
          An interactive game to learn about Octopuses and what they have to
          teach us about being human.
        </h2>
        <Button>Let's Go!</Button>
      </SideBar>
    </Wrapper>
  );
};

export default GetStarted;
