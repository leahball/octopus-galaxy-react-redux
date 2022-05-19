import React from "react";
import styled from "styled-components";
// import { useOpenAttrs } from "../../../Hooks/useOpenAttrs";

const Dialog = styled.div`
  width: 330px;
  background-color: white;
  position: fixed;
  top: 90px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 165px);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  animation-name: example;
  animation-duration: 1s;
  @keyframes example {
    0% {
      left: 0px;
    }
    100% {
      left: calc(50% - 165px);
    }
  }
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogAttrsImg = styled.div`
  min-height: 190px;
  margin-bottom: 10px;
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: 175px;
`;

const DialogBanner = styled.div`
  background-color: ${(p) => p.theme.lightRed};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  h3 {
    color: ${(p) => p.theme.midOcean};
    font-size: 3rem;
    padding: 8% 2%;
    text-align: center;
  }
`;

const AttrsName = styled.h2`
  font-size: 2.5rem;
  font-style: italic;
  text-align: center;
  font-weight: 400;
  background-color: ${(p) => p.theme.lightOcean};
  margin: 0px 20px;
  border-radius: 10px;
  color: ${(p) => p.theme.midOcean};
`;

const AttrsDesc = styled.p`
  font-size: 1.3rem;
  line-height: 1.8rem;
  text-align: center;
  padding: 20px 40px;
  color: ${(p) => p.theme.darkOcean};
`;

const AttrsButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const AttrsAdd = styled.div`
  margin-bottom: 10px;
  color: white;
  height: 40px;
  border-radius: 10px;
  padding: 8px 30px;
  text-align: center;
  cursor: pointer;
  background-color: ${(p) => p.theme.midOcean};
  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    box-shadow: 0px 0px 10px 0px grey;
  }
`;

export const AttrsSkip = styled.div`
  margin: 10px;
  color: ${(p) => p.theme.midOcean};
  height: 40px;
  border-radius: 10px;
  padding: 8px 30px;
  text-align: center;
  cursor: pointer;
  background-color: white;
  border: solid black 1px;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 2%;
`;

function AttributeDialogContainer({ openAttrs, setOpenAttrs }) {
  function close() {
    setOpenAttrs();
  }

  // function addtoAttrs() {
  // }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner>
          <h3>It's a Match!</h3>
        </DialogBanner>
        <DialogContent>
          <DialogAttrsImg img={openAttrs.src} />
          <AttrsName>{openAttrs.title}</AttrsName>
          <AttrsDesc>{openAttrs.description}</AttrsDesc>
          <AttrsButtons>
            <AttrsAdd onClick={close}>Close</AttrsAdd>
            {/* <AttrsSkip
            // onClick={addToSkip}
            >
              Skip
            </AttrsSkip> */}
          </AttrsButtons>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function AttributeDialog(props) {
  if (!props.openAttrs) return null;
  return <AttributeDialogContainer {...props} />;
}
