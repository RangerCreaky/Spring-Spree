import React from "react";
import styled from "styled-components";

const Explore = () => {
  return (
    <ExploreContainer>
      <Text>
        {/* <h2 className='heading'> Srishti </h2> */}
        <p className="top text">
          The Universe is everything we can touch, feel, sense, measure or
          detect. Thinking of our world today,makes wonder about tomorrow,a
          year,a decade or a century later.
        </p>
        <p className="questions">
          Will the world remains same? Will humans be the same? Will situations
          be the same? Were do these uncertainty originate from, how is it
          created?{" "}
        </p>
        <p className="tag">
          This is Srishti - the creation of the universe, earth etc{" "}
        </p>
        <p className="bottom text">
          For a long time, there were only cold screens and fever dreams. The
          months whizzed by in a haze of loneliness and uncertainty. Stuck in an
          eternity of indefinite days. People learnt new things over the past 2
          years, got habituated to new habits and there was a shift in our
          culture over time. Now, two years later we come back to the same
          place. From where we left, is where we begin again. We present
          Srishti,the creative essence of the universe.
        </p>
      </Text>
      <img src="../../images/springspree22_75.png" alt="" />
    </ExploreContainer>
  );
};

export default Explore;

const ExploreContainer = styled.div`
  height: 100vh;
  background-image: url("../../images/springspree22_70.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;

  @media (max-width: 800px) {
    height: 100%;
  }

  > img {
    @media (max-width: 1200px) {
      width: 500px;
      height: 500px;
    }
    @media (max-width: 1000px) {
      width: 400px;
      height: 400px;
    }
    @media (max-width: 900px) {
      width: 300px;
      height: 300px;
    }
  }
`;

const Text = styled.div`
  color: white;
  width: 650px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 80%;

  margin-top: 70px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 800;
  font-size: larger;

  .questions {
    color: orange;
  }

  .bottom {
    color: orange;
  }

  @media (max-width: 1200px) {
    width: 500px;
  }

  > h2 {
    font-size: 56px;
    text-transform: uppercase;
  }
`;
