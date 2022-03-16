import React from 'react';
import styled from 'styled-components';

import SponsorItem from './SponsorItem';

import VideoBackground from './VideoBackground';

const Sponsors = () => {
    return (
        <>
            <SponsorsContainer>
                <VideoBackground />
                <SponsorsInnerContainer>
                    <SponsorText>

                        <h1> Lorem Ipsum </h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis odio at tincidunt eleifend. Duis et eleifend metus. In nec dui cursus, condimentum nisi ut, rutrum purus. Cras a orci ex. Aliquam finibus sollicitudin lectus, sed condimentum tortor tempor quis. Nunc quis consectetur  </p>

                        <h4> Contact US </h4>
                        <ul>
                            <li>inkey : 0000000000</li>
                            <li>pinkey : 1111111111</li>
                            <li>ponkey : 2222222222</li>
                        </ul>

                    </SponsorText>

                    <SponsorItems>
                        <SponsorItem />
                    </SponsorItems>
                </SponsorsInnerContainer>
            </SponsorsContainer>
        </>
    )
}

export default Sponsors;

const SponsorsContainer = styled.div`
    position : relative;
    width : 100%;
    height : 100vh;
    display : flex;
    align-items : center;
    overflow : hidden;

    background-image: linear-gradient( rgba(255 , 255 , 255 , 0.2) 0%, rgba(51 , 51 , 51 , 0.2) 100%);
`;

const SponsorsInnerContainer = styled.div`
    display : flex;
    flex-direction : row;
    height : 100%;

    @media (max-width : 700px){
        flex-direction : column;
    }
`;

const SponsorText = styled.div`
    width : 35%;
    color : white;
    height : 100%;  
    padding :  3rem;
    margin-top : 70px;

    > h1 , h4{
        text-transform : uppercase;
        font-family: 'Poppins', sans-serif;
    }

    > p{
        margin-top : 3px;
        font-size : 1.2rem;
        font-weight : 400;
        font-family: 'Fredoka', sans-serif;
    }

    > h4{
        margin-top : 10px;
    }

    > ul{
        list-style : none;
        margin-top : 2px;
        > li{
            margin-top : 1.5px;
            font-family: 'Fredoka', sans-serif;
        }
    }

    @media (max-width : 800px){
        width : 100%;
    }

`;

const SponsorItems = styled.div`
    width : 73%;
    margin-top : 70px;
    padding: 2rem;

    @media (max-width : 800px){
    }
`; 