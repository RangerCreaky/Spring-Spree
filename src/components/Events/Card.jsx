import styled from "styled-components";

import Button from "../UI/Button";

export default function Card() {
  return (
    <Container>
      <Image src="/assets/images/card_bg.jpg" />
      <Title>Pro Shows</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        doloremque praesentium repudiandae, vero officia amet ex beatae ratione
        vel. Aut rem similique laboriosam ipsa ab, quam vitae ducimus accusamus
        delectus.
      </Description>
      <Button>View</Button>
    </Container>
  );
}

const Container = styled.div`
  margin: 10px;
  height: 600px;
  max-width: 50vw;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;

  background-color: #999;
  box-shadow: 5px 5px 10px 0px #0000003d;
  /* background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url();
  background-size: cover;
  background-position: center; */
  transition: transform 300ms;

  &:hover {
    transform: scale(1.02);
  }
`;

const Title = styled.h1`
  margin-top: 3rem;
  color: white;
`;

const Description = styled.div`
  color: white;
  margin-bottom: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
