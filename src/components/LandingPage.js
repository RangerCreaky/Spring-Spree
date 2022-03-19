import React, { useRef } from "react";
import styled from "styled-components";

import About from "./About";
import Shristi from "./Shristi";
import Footer from "./Footer";

import useScrollSnap from "react-use-scroll-snap";
import { useScrollBy, useScrollTo } from "react-use-window-scroll";

const LandingPage = () => {
  // for snapping the page
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  // scroll the page
  const scrollBy = useScrollBy();
  const scrollTo = useScrollTo();
  const handleScroll = () => {
    // scrollTo({ top: 0, left: 0, behavior: "smooth" })

    scrollBy({ top: window.innerHeight, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <HomePage ref={scrollRef}>
        <div>
          <LandingPageContainer>
            <ul id="landing-view-scene">
              <li data-depth="0.06" id="logo" className="layer">
                <img src="./images/logo.png" alt="logo" />
              </li>
              <li data-depth="0.2" id="stars" className="layer">
                <img src="./images/stars.png" alt="stars" />
              </li>
              <li data-depth="0.5" id="universe" className="layer">
                <img src="./images/bg_2.png" alt="universe" />
              </li>
              <li data-depth="0.7" id="planet" className="layer">
                <img src="./images/planet.png" alt="planet" />
              </li>
              <li data-depth="0" id="event-title" className="layer">
                <div>
                  <h1 className="titlename">SpringSpree'22</h1>
                  <p className="themename">Srishti</p>
                  <p className="event-dates">April 8-10, 2022</p>
                </div>
              </li>
            </ul>
          </LandingPageContainer>
        </div>

        <div>
          <Shristi />
        </div>

        <div>
          <About />
        </div>

        <div>
          <Footer />
        </div>

        <button onClick={handleScroll}> button </button>
      </HomePage>
    </>
  );
  // onClick={changeId}
};

export default LandingPage;

const HomePage = styled.section`
  height: 100vh;
  /* overflow-y: auto; */
  > button {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 100;
  }
`;

const LandingPageContainer = styled.div`
  overflow: hidden;
  > ul {
    list-style: none;
    display: block;
  }
  > #landing-view-scene {
    @media (max-width: 1200px) {
      background-size: cover;
      background-position: top;
    }
    overflow: hidden;
    height: 100vh;
    width: 100%;
    position: relative;
    background-image: url("./images/bg_2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    > #event-title {
      > div {
        font-family: "signatra";
        position: absolute;
        top: 68%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 50;

        > h1 {
          white-space: nowrap;
          font-weight: 400;
          padding: 0 50px;
          background: -webkit-linear-gradient(90deg, #fb3981 0%, #fdbb2d 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: clamp(90px, 10vw, 7.5rem);
        }

        > .themename {
          background: -webkit-linear-gradient(90deg, #8412f3 0%, #fb3981 100%);
          margin-top: -15px;
          font-size: clamp(47px, 6vw, 3rem);
          white-space: nowrap;
          font-weight: 400;
          padding: 0 50px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        > .event-dates {
          white-space: nowrap;
          font-weight: 500;
          padding: 0 50px;
          color: white;
          font-family: "Poppins", sans-serif;
          font-size: 1.5rem;
        }
      }
    }

    > .layer {
      position: absolute;
      width: 100%;
      height: 100%;

      > img {
        position: absolute;
        width: 120%;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    > #logo {
      z-index: 50;
      > img {
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min(50vw, 250px) !important;
      }
    }

    #stars {
      z-index: 40;
      img {
        bottom: 0;
        width: 90%;
        @media (max-width: 1200px) {
          bottom: 110px;
        }
      }
    }

    #planet {
      z-index: 20;
      img {
        bottom: -90px;

        @media (max-width: 1200px) {
          width: 105%;
          bottom: 130px;
        }
      }
    }

    #scrolltrigger {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 15px;
    }
  }
`;
