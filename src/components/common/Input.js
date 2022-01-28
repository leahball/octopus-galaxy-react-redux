import styled from "styled-components";

const Input = styled.input`
  padding: 2% 2%;
  border: 1px solid ${(p) => p.theme.darkRed};
  margin-bottom: 2%;
  border-radius: 6px;
  font-size: 1.5rem;
  font-family: "Poppins";
  /* margin-bottom: 4%; */
  width: 100%;
  box-sizing: border-box;
  height: 20%;
`;

export default Input;
