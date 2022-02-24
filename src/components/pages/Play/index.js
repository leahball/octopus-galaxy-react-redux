import React, { useState, useEffect } from "react";
import { Button } from "../../common/Button";
import SingleCard from "./SingleCard";
import Conch from "../../../images/small/conch-sm.png";

import {
  CardGrid,
  TurnWrapper,
  DirectionsH,
  DirectionsP,
  DirectionsWrapper,
  GameLayout,
  GameSidebar,
  GameWrapper,
  DirectionIcon,
} from "./PlayElements";

const cardImages = [
  {
    id: 1,
    src: require("../../../images/small/strength-sm.png"),
    matched: false,
    name: "strength",
    description: "empty for now",
    value: 1,
    selected: false,
  },
  {
    src: require("../../../images/small/synesthesia-sm.png"),
    matched: false,
  },
  { src: require("../../../images/small/camo-sm.png"), matched: false },
  { src: require("../../../images/small/connect-sm.png"), matched: false },
  { src: require("../../../images/small/craft-sm.png"), matched: false },
  { src: require("../../../images/small/regenerates-sm.png"), matched: false },
  {
    src: require("../../../images/small/jet-propulsion-sm.png"),
    matched: false,
  },
  {
    src: require("../../../images/small/decentralized-sm.png"),
    matched: false,
  },
];

export default function Play() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
              //where to add toggle open to 
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1500);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };
  //start game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <GameLayout>
      <GameSidebar>
        <DirectionsWrapper>
          <DirectionIcon src={Conch} />
          <DirectionsH>Directions</DirectionsH>
          <DirectionsP>
            *For now* match cards and keep score of how many turns you can get
            all matches in! <br />
            <br />
            ***Functionality not coded yet!!! Stay tuned!***
            <br />
            Gather Octopus attributes based on the memory pair you select. There
            are 8 total matches but you can only pick 3 attributes to take to
            the next round. You may flip each match only twice-- once to see
            what attribute it possesses, the second to revisit and select
            it--all require you to use your memory!
          </DirectionsP>
        </DirectionsWrapper>
      </GameSidebar>

      <GameWrapper>
        <TurnWrapper>
          <h2>Memory Game</h2>
          <h3>Turns: {turns} </h3>
          <Button onClick={shuffleCards}>New Game</Button>
        </TurnWrapper>
        <CardGrid>
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </CardGrid>
      </GameWrapper>
    </GameLayout>
  );
}
