import styled from "styled-components";
import Card from "./Card";

export default function CardContainer({ events = [], refresh }) {
  return (
    <Container>
      {events.map((event) => (
        <Card
          key={event._id || event.event_id}
          event={event}
          refresh={refresh}
        />
      ))}
    </Container>
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
