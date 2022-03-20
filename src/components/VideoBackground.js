import React from "react";
import styled from "styled-components";

const VideoBackground = () => {
  return (
    <>
      <VideoContainer>
        <Video autoPlay muted loop>
          <source src="/assets/videos/bg.mpv" type="video/mp4" />
        </Video>
      </VideoContainer>
    </>
  );
};

export default VideoBackground;

const VideoContainer = styled.div`
  position: absolute;
  z-index: -100;
`;

const Video = styled.video`
  object-fit: cover;
`;
