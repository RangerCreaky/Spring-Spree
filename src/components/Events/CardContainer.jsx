import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Modal from "./Modal";
import RegisterAndPay from "../../utils/Register";
import { useAuth } from "../../hooks/auth";

export default function CardContainer({ events = [] }) {
  const [modalVisible, setModalVisible] = useState(false);
  const user = useAuth();
  return (
    <>
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)} onSubmit={(user)=>{RegisterAndPay(user)}} user={user} />
      <Container>
        {events.map(({ id, title, subTitle, image, tagline }) => (
          <Card
            key={id}
            image={image}
            title={title}
            subTitle={subTitle}
            tagline={tagline}
            onClick={() => setModalVisible(true)}
          />
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
  justify-content: center;
`;
