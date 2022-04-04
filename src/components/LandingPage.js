import React, { useRef } from "react";
import styled from "styled-components";

import About from "./About";
import Shristi from "./Shristi";
import Footer from "./Footer";
import LandingPageContainer from "./LandingPageContainer";
import Video from "./Video";

import useScrollSnap from "react-use-scroll-snap";

import useOnScreen from "../hooks/screen";

import { Link } from "react-router-dom";

const LandingPage = () => {
  // for snapping the page
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  // footer ref
  const footerRef = useRef();
  const isVisible = useOnScreen(footerRef);

  const handleScroll = () => {
    if (isVisible) {
      setTimeout(function () {
        window.scrollTo(0, 0);
      }, 100);
    } else {
      setTimeout(function () {
        window.scrollBy(0, window.innerHeight);
      }, 100);
    }
  };

  return (
    <>
      <HomePage ref={scrollRef}>
        <div>
          <LandingPageContainer />
        </div>

        <div>
          <Shristi />
        </div>

        <div>
          <About />
        </div>
        <Video />
        <div>
          <div className="small-text container">

            <h4>Instructions</h4>
            <hr className="hr" />

            <p>
              To reigster for spree events, visit{" "}
              <Link to="/events">events</Link> page. And to update/view your
              package details, please visit <Link to="/profile">profile</Link>{" "}
              page
            </p>
          </div>
          <Footer />
          <div className="dummy" ref={footerRef}>
            {" "}
          </div>
        </div>

        <img
          onClick={handleScroll}
          src={`../../images/${isVisible ? "springspree22_73.svg" : "springspree22_72.svg"
            }`}
          alt={`${isVisible ? "springspree22_73" : "springspree22_734"}`}
        />
      </HomePage>
    </>
  );
};

export default LandingPage;

const HomePage = styled.section`
  height: 100vh;

  .small-text {
    text-align: center;

    .hr {
      width: 5%;
      height: 2px;
      background-color: var(--c);
      opacity: 1;
      margin: 6px auto 10px auto;
    }
  }

  > img {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 1000;
    cursor: pointer;
  }

  > div {
    > .dummy {
      height: 2px;
    }
  }
`;
