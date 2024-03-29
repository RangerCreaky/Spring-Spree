import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <AboutContainer id="2">
        <AboutInnerContainer>
          <AboutContent
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1500"
          >
            <h2> About </h2>
            <p>
              SpringSpree, conceived in 1978 and now coming to it's 35th
              edition, is NIT Warangal's cultural fest. It is one of the biggest
              fests in the country, with a far-reaching impact on students all
              over the nation.
            </p>
            <p>
              With a plethora of thrilling events, from Idol, Director's Cut,
              Choreo Night, etc... and several new activities as well,
              SpringSpree is back in 2022 after a two year hiatus! A festival
              well worth your time, we are ready to bring you entertainment and
              excitement like never before.
            </p>
          </AboutContent>
          <img
            src="../../images/springspree22_82.webp"
            alt="springspree22_82"
          />
        </AboutInnerContainer>
      </AboutContainer>
    </>
  );
};

export default About;

const AboutContainer = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: black;
  background-size: cover, cover;
  padding: 100px 0;
  height: 100vh;
  color: white;
`;

const AboutInnerContainer = styled.div`
  padding: 0 5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  overflow-y: hidden;
  @media (max-width: 750px) {
    padding: 20px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
  img {
    width: 35%;
    height: auto;
    @media (max-width: 500px) {
      margin-top: 1rem;
      width: 70%;
    }
  }
`;

const AboutContent = styled.div`
  color: white;
  /* font-family: "Source Sans Pro", sans-serif; */
    font-family: "Poppins";
  /* font-weight: 800; */
  font-size: larger;
  max-width: 50ch;
  position: relative;
  z-index: 100;
  > h2 {
    font-size: 5rem;
    @media (max-width: 950px) {
      font-size: 3em;
    }
  }

  > p {
    font-size: 1.1rem;

    @media (max-width: 950px) {
      font-size: 15px;
    }
  }
`;
