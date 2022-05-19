import styled from "styled-components";
// import BackImage from "/assets/small/backside.png";

export const Card = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.lightRed};
  box-shadow: 0px 0px 2px 0px grey;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    box-shadow: 0px 0px 10px 0px grey;
  }
  img {
    width: 100%;
    display: block;
    border: 2px solid #fff;
    border-radius: 10px;
  }
  //front of the card
  .front {
    transform: rotateY(90deg);
    position: absolute;
  }
  .flipped .front {
    transform: rotateY(0deg);
    background-color: ${(p) => p.theme.lightRed};
  }
`;

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <Card>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/assets/small/backside.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </Card>
  );
}
