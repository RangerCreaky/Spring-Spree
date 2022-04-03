import styled from "styled-components";
import { motion } from "framer-motion";

import CardContainer from "./CardContainer";

export default function Section({ events = [], title }) {
  return (
    <Container
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      id={title}
    >
      <h1 className="event-title">{title}</h1>
      <CardContainer events={events} />
    </Container>
  );
}

const Container = styled(motion.div)`
  margin-top: 2rem;

  .event-title {
    font-size: 2.5rem;
    text-align: center;
  }
`;
