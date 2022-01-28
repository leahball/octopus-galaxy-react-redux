import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  background-color: ${(p) => (p.secondary ? "#FD0D67" : "#5110D5")};
  color: white;
  padding: 3% 8%;
  margin: 2%;
  font-size: 3rem;
  font-family: "Rubik";
  font-weight: 700;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  a:hover {
    background-color: "#33058F";
  }
`;

export { Button };
