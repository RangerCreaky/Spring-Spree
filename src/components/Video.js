import React from 'react';
import styled from 'styled-components';

const Video = () => {
    return (
        <Container>

            <InnerContainer>
                <h4> Witness the live performance of <strong> DARSHAN RAVAL </strong> on 10th of April</h4>
                <video controls poster='../../images/poster.jpeg'>
                    <source src="../../assets/videos/NIT.mp4" type="video/mp4" />
                </video>
            </InnerContainer>
        </Container>
    )
}

export default Video;

const Container = styled.div`
    color : white;
    height: 100vh;

    h4{
        margin-top: 50px;

        strong{
            color: var(--c);
        }
    }

    background: url('../../images/image-bg.jpg');
    background-position: center;
    background-size: cover ;
    background-repeat: no-repeat;
`;

const InnerContainer = styled.div`
    margin-top: 80px;
    height: 100%;
    display: flex;
    flex-direction : column-reverse;
    justify-content: center;
    align-items: center;

    video{
        padding: 1rem;
        border: 2px double var(--c);
        width: 750px;
        height : 440px;
    }
`;