import styled, { css } from "styled-components";

const Button = styled.button`
  color: white;
  background: ${(p) => (p.secondary ? "#FD0D67" : "#5110D5")};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid white;
  cursor: pointer;
  font-weight: 700;
  ${(p) =>
    p.large
      ? css`
          padding: 3%;
          border-radius: 8px;
          font-size: 2rem;
        `
      : css`
          padding: 2% 6%;
          border-radius: 8px;
          font-size: 1em;
        `}
  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
