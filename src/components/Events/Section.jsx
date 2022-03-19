import styled from "styled-components";

import CardContainer from "./CardContainer";

export default function Section({ events = [], title }) {
  return (
    <Container id={title}>
      <h1 className="event-title">{title}</h1>
      {/* TODO: handle if no events are present */}
      <CardContainer events={events} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 2rem;

  .event-title {
    font-size: 2.5rem;
    text-align: center;
  }
`;
