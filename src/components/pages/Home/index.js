import React from "react";
// import LargeOctopus from "/assets/large/Octopus.png";

import {
  HomeWrapper,
  OctopusImageWrapper,
  HomeSidebar,
  HomeH,
  HomeP,
  IntroWrapper,
} from "./HomeElements.js";

export default function Home() {
  return (
    <>
      <HomeWrapper>
        <HomeSidebar>
          <IntroWrapper>
            <HomeH> Welcome to Octopus Galaxy</HomeH>
            <HomeP>
              An interactive game to learn about our fascinating neighbors in
              the sea!
            </HomeP>
          </IntroWrapper>
        </HomeSidebar>
        <OctopusImageWrapper src="/assets/large/Strength.png"></OctopusImageWrapper>
      </HomeWrapper>
    </>
  );
}
