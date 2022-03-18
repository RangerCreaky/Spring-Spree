import React from "react";
import styled from "styled-components";

export default function SolarBg({ children }) {
  return (
    <div>
      <BgMedia>
        <div>
          <video autoPlay muted loop>
            <source src="/assets/videos/bg.m4v" />
          </video>
        </div>
      </BgMedia>
      <>{children}</>
    </div>
  );
}

const BgMedia = styled.div`
  div {
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;

    video {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
      object-position: right center;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background-color: #00000021;
      height: 100%;
      width: 100%;
    }
  }
`;
