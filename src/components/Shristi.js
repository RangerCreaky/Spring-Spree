import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import VideoBackground from './VideoBackground';

const Shristi = () => {
  return (
    <>
      <Container id="1">
        {/* <VideoBackground /> */}
        <Text data-aos="fade-left" data-aos-duration="1500">
          <div>
            <p className="orange cursive">
              {" "}
              Everything that was created! <br />
              Everything that is existing!{" "}
            </p>

            <p>
              The Universe and beyond! <br />
              The Nature And The Creation!
            </p>

            <p className="orange cursive">
              {" "}
              Now, It's time to experience the reality, now is the time to make
              physical meets a new normal{" "}
            </p>

            <p> Let's all meet in the real and rejoice the world again </p>
          </div>
          <div className="button">
            <StyledLink to="/explore">
              {" "}
              Explore <span></span> <span></span> <span></span> <span></span>
            </StyledLink>
          </div>
        </Text>
        <img src="../../images/springspree22_75.png" alt="springspree22_75" />
      </Container>
    </>
  );
};

export default Shristi;
const Container = styled.div`
  height: 100vh;
  padding-bottom: 3rem;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  /* change this later */
  z-index: 1000;
  background: url("../../images/springspree22_77.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column-reverse;
  }

  > img {
    margin-top: 70px;
    width: 40%;
    height: auto;
    @media (max-width: 1200px) {
      width: 400px;
      height: 400px;
    }
    @media (max-width: 950px) {
      width: 350px;
      height: 350px;
    }
    @media (max-width: 750px) {
      width: 300px;
      height: 300px;
    }
    @media (max-width: 400px) {
      width: 250px;
      height: 250px;
    }
  }
`;

const Text = styled.div`
  color: white;
  width: 45%;
  font-size: 1.2rem;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 800;
  font-size: larger;
  /* font-family: 'Steinfeld'; */

  text-align: center;

  @media (max-width: 750px) {
    font-size: 17px;
    width: 100%;
    padding: 10px;
    text-align: center;
  }
  @media (max-width: 400px) {
    font-size: 12px;
    width: 100%;
    padding: 10px;
    text-align: center;
  }
  > .button {
    display: flex;
    justify-content: center;

    @media (max-width: 750px) {
      justify-content: center;
      margin-top: 10px;
    }
  }

  > h1 {
    color: var(--c);
  }

  > div {
    margin-top: 15px;

    > .orange {
      color: var(--c);
    }

    > .cursive {
      font-family: cursive;
    }
  }
`;

const StyledLink = styled(Link)`
  color: var(--c);
  font-size: 16px;
  border: 4px solid var(--c);
  border-radius: 0.5em;
  width: 12em;
  height: 3em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 2.5em;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.5s;
  text-decoration: none;

  > span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
  }

  &:hover {
    color: black;

    span {
      transform: translateY(0) scale(2);
    }

    span:nth-child(1) {
      --n: 1;
    }

    span:nth-child(2) {
      --n: 2;
    }
    span:nth-child(3) {
      --n: 3;
    }

    span:nth-child(4) {
      --n: 4;
    }
  }
`;
