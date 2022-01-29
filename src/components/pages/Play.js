import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PageLayout } from "../common/PageLayout";
import { Button } from "../common/Button";
import SingleCard from "../SingleCard";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

const cardImages = [
  { src: "/assets/images/small/strength-sm.png", matched: false },
  { src: "/assets/images/small/synesthesia-sm.png", matched: false },
  { src: "/assets/images/small/camo-sm.png", matched: false },
  { src: "/assets/images/small/connect-sm.png", matched: false },
  { src: "/assets/images/small/craft-sm.png", matched: false },
  { src: "/assets/images/small/regenerates-sm.png", matched: false },
  { src: "/assets/images/small/jet-propulsion-sm.png", matched: false },
  { src: "/assets/images/small/decentralized-sm.png", matched: false },
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
    <PageLayout>
      <h1>Memory Game</h1>
      <Button onClick={shuffleCards}>New Game</Button>
      <p>Turns: {turns} </p>
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
    </PageLayout>
  );
}
