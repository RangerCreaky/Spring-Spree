import styled from "styled-components";

export default function ToastHolder({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1rem;
  z-index: 1;
  color: black;
`;
