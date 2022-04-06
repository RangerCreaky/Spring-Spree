import React from 'react';
import styled from 'styled-components';

import TermsAndConditions from "./TermsAndConditions";
import Privacy from "./Privacy";
import Refund from "./Refund";

const InnerApp = ({ heading, index }) => {
  const renderTerms = () => {
    switch (index) {
      case 1:
        return (<TermsAndConditions />)
      case 2:
        return (<Privacy />)
      case 3:
        return (<Refund />)
      default:
        break;
    }
  }

  return (
    <Container>
      <h4> {heading} </h4>
      <hr />
      <InnerContainer>
        {renderTerms()}
      </InnerContainer>
    </Container>
  )
}

export default InnerApp;

const Container = styled.div`
  width : 70%;
  margin : auto;
  background-color : #ffffff;
  color: black;
  padding: 3rem;
  border-radius: 20px;

  color: #555;


  h4{
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 3rem;
    text-align: center;
    margin-bottom: 0;
    color: black;
  }

  hr{
    width: 10%;
    height : 3px;
    color: var(--c);
    margin: 8px auto 30px auto;
    opacity: 1;
  }

  position: relative;
    /* margin-bottom: 40px; */
`;

const InnerContainer = styled.div`
  max-height: 60vh;
  overflow-y: scroll;

  &::after{
    content: '';
    position: absolute;
    left: 2px;
    right: 0px;
    height: 5%;
    bottom: 20px;
    background: linear-gradient(180deg, rgba(139,167,32,0) 0%, rgba(255,255,255,1) 100%);
    pointer-events: none;
  }

  li{
    margin-bottom : 5px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;

  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--c);
    border-radius: 10px;
  }

`;