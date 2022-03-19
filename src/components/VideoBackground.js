import React from 'react';
import styled from 'styled-components';

import Comets from './Comets';

const VideoBackground = () => {
    return (
        <>
            <VideoContainer>
                <Video autoPlay muted loop>
                    <source src='../../assets/spreebg.mp4' type='video/mp4' />
                </Video>
            </VideoContainer>
            <Comets />
        </>
    )
}

export default VideoBackground;

const VideoContainer = styled.div`
    position : absolute;
    z-index : -100;
`;

const Video = styled.video`
    object-fit : cover;
`;
