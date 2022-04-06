import React from 'react';
import styled from 'styled-components';

const Refund = () => {
  return (
    <Container>
      <p> If a registered attendee fails to attend an event for which they had registered, the event registration fees will not be refunded or allocated to another event. </p>

      <p>  The amount will not be refunded if you cancel the tickets prior to any event.</p>

      <p>  Ticket for a specific event can only be used for that particular event and cannot be allocated to another event.</p>

      <p> For any problems regarding ticket booking and cancellation,
        contact - +91 96189 12245 , +91 95737 41352</p>

    </Container>
  )
}

export default Refund;

const Container = styled.div``;
