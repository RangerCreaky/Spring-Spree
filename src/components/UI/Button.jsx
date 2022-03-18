import styled from "styled-components";

export default function Button({ children }) {
  return (
    <>
      <ButtonStyle>{children}</ButtonStyle>
    </>
  );
}

const ButtonStyle = styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  color: ${({ color }) => color || "#fff"};
  background: black;
  border-radius: 5px;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(1.02);
  }
`;
