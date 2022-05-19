import React, { useState, useEffect } from "react";
import { Button } from "../../common/Button";
import SingleCard from "./SingleCard";
// import Conch from "../../../assets/small/conch-sm.png";
// import { useOpenAttrs } from "../../../Hooks/useOpenAttrs";
import { AttributeDialog } from "./AttributeDialog";
import { memoryData } from "../../../data/memoryData";

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

export default function Play() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [openAttrs, setOpenAttrs] = useState(true);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...memoryData, ...memoryData]
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
      // console.log(`${openAttrs} from Play.js`);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              // console.log("Card is matched in Play.js logic");
              setOpenAttrs(true);
              return { ...card, matched: true };
              ///matched logic goes here?
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
    <>
      <AttributeDialog setOpenAttrs={setOpenAttrs} openAttrs={openAttrs} />
      <GameLayout>
        <GameSidebar>
          <DirectionsWrapper>
            <DirectionIcon src="../../../assets/small/conch-sm.png" />
            <DirectionsH>Directions</DirectionsH>
            <DirectionsP>
              Gather Octopus facts based on the memory pair you select. There
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
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                openAttrs={openAttrs}
                disabled={disabled}
              />
            ))}
          </CardGrid>
        </GameWrapper>
      </GameLayout>
    </>
  );
}
