import React, { useRef } from "react";
import styled from "styled-components";

import About from "./About";
import Shristi from "./Shristi";
import Footer from "./Footer";
import LandingPageContainer from "./LandingPageContainer";

import useScrollSnap from "react-use-scroll-snap";
import { useScrollBy, useScrollTo } from "react-use-window-scroll";

import useOnScreen from "../customHooks/useOnScreen";

const LandingPage = () => {
  // for snapping the page
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  // footer ref
  const footerRef = useRef();
  const isVisible = useOnScreen(footerRef);

  // scroll the page
  const scrollBy = useScrollBy();
  const scrollTo = useScrollTo();

  const handleScroll = () => {
    if (isVisible) {
      scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      scrollBy({ top: window.innerHeight, left: 0, behavior: "smooth" });
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
        <br></br>
        <div ref={footerRef}>
          <Footer />
        </div>

        <img
          onClick={handleScroll}
          src={`../../images/${isVisible ? "upper" : "down"}-arrow.svg`}
          alt=""
        />
      </HomePage>
    </>
  );
  // onClick={changeId}
};

export default LandingPage;

const HomePage = styled.section`
  height: 100vh;

  /* overflow-y: auto; */
  > img {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 1000;
    cursor: pointer;
  }
`;

// const LandingPageContainer = styled.div`
//     overflow : hidden;
//     > ul{
//         list-style: none;
//         display: block;
//     }
//     > #landing-view-scene{
//         @media (max-width: 1200px) {
//             background-size: cover;
//             background-position: top;
//         }
//         overflow: hidden;
//         height: 100vh;
//         width: 100%;
//         position: relative;
//         background-image: url('./images/bg_2.png');
//         background-position: center;
//         background-repeat: no-repeat;
//         background-size: 100% 100%;

//         > .layer{
//             position: absolute;
//             width:100%;
//             height: 100%;

//             > img{
//                 position: absolute;
//                 width: 120%;
//                 left: 50%;
//                 transform: translateX(-50%);
//             }
//         }

//         > #logo {
//             z-index: 50;

//         }

//         #stars{
//             z-index: 40;
//             img{
//                 bottom: 0;
//                 width: 90%;
//                 @media (max-width: 1200px) {
//                     bottom: 110px;
//                 }
//             }
//         }

//         #planet{
//             z-index: 20;
//             img{
//                 bottom: -90px;

//                 @media (max-width: 1200px) {
//                     width: 105%;
//                     bottom: 130px;
//                 }
//             }
//         }

//         #scrolltrigger {
//             position: absolute;
//             left: 50%;
//             transform: translateX(-50%);
//             bottom: 15px;
//         }
//     }
// `;
