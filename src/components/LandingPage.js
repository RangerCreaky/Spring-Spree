import React, { useRef } from "react";
import styled from "styled-components";

import About from "./About";
import Shristi from "./Shristi";
import Footer from "./Footer";
import LandingPageContainer from "./LandingPageContainer";

import useScrollSnap from "react-use-scroll-snap";

import useOnScreen from "../hooks/screen";

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
        <div>
          <Footer />
          <div className="dummy" ref={footerRef}>
            {" "}
          </div>
        </div>

        <img
          onClick={handleScroll}
          src={`../../images/${isVisible ? "upper" : "down"}-arrow.svg`}
          alt=""
        />
      </HomePage>
    </>
  );
};

export default LandingPage;

const HomePage = styled.section`
  height: 100vh;

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
