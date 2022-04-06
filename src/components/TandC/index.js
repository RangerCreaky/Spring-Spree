import React from 'react';
import styled from 'styled-components';

import { useParams, Navigate } from 'react-router-dom';

import InnerApp from './InnerApp';

const TandC = () => {
  const { id } = useParams();

  const renderTerms = () => {

    if (id === "terms-and-conditions") {
      return (
        <InnerApp heading="TERMS AND CONDITIONS" index={1} />
      )
    }
    else if (id === "privacy-policy") {
      return (
        <InnerApp heading="PRIVACY POLICY" index={2} />
      )
    }
    else if (id === "refund-and-cancellation") {
      return (
        <InnerApp heading="REFUND AND CANCELLATION POLICY" index={3} />
      )
    }
    else {
      console.log("hello world");
      return <Navigate to={'/'} replace />
    }
  }

  return (
    <Wrapper>
      <Container>
        {renderTerms()}
      </Container>
    </Wrapper>

  )
};

export default TandC;
const Wrapper = styled.div`
  background: rgb(14, 14, 14);
  background: linear-gradient(
    0deg,
    rgba(14, 14, 14, 1) 0%,
    rgba(11, 0, 16, 1) 15%,
    rgba(44, 0, 59, 1) 100%
  );

  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0%;
  left: 0%;
  
`
const Container = styled.div`
  margin-top: 90px;
  display: flex;
  align-items: center;
`;

