import React from "react";
import styled from "styled-components";

const Field = ({ label, children }) => {
  return (
    <Container className="field-value col-lg-4 col-sm-6">
      <p className="field font-weight-bold">{label}:</p>
      <h6 className="value text-muted"> {children} </h6>
    </Container>
  );
};

export default Field;

const Container = styled.div`
  font-size: 1.2rem;

  .field {
    text-transform: capitalize;
  }
`;
