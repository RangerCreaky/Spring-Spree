import React from "react";

import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Modal from "./Modal";
import registerAndPay from "../../utils/Register";
import { useAuth } from "../../hooks/auth";

export default function CardContainer({ events = [] }) {
  const [modalVisible, setModalVisible] = useState(false);
  const user = useAuth();

  const handleSubmit = (event) => () => {
    registerAndPay({ user, event });
  };

  return (
    <>
      <Container>
        {events.map((event) => {
          const { _id, name, summary, poster } = event;
          return (
            <React.Fragment key={_id}>
              <Card
                image={poster}
                title={name}
                subTitle={summary}
                // tagline={tagline}
                onClick={() => setModalVisible(true)}
              />
              <Modal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSubmit={handleSubmit(event)}
                data={event}
              />
            </React.Fragment>
          );
        })}
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
