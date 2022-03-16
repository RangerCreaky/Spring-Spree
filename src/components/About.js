import React from 'react';
import styled from 'styled-components';


const About = ()=>{
    return (
        <>
            <AboutContainer>
                <AboutInnerContainer>
                    <AboutContent data-aos="fade-left" data-aos-offset="200" data-aos-duration="1500">
                        <h2> About </h2>
                        <p>SpringSpree, conceived in 1978 and now coming to it's 35th edition,
                            is NIT Warangal's cultural fest. It is one of the biggest fests in
                            the country, with a far-reaching impact on students all over the
                            nation.
                        </p>
                        <p>With a plethora of thrilling events, from Idol, Director's Cut,
                            Choreo Night, etc... and several new activities as well, SpringSpree
                            is back in 2022 after a two year hiatus! A festival well worth your
                            time, we are ready to bring you entertainment and excitement like
                            never before.
                        </p>
                    </AboutContent>
                </AboutInnerContainer>
            </AboutContainer>
        </>
    )
}

export default About;

const AboutContainer = styled.section`
    width: 100%;
    background-color: black;
    background-size: cover, cover;
    padding: 100px 0;
    min-height: 70vh;
`;

const AboutInnerContainer = styled.div`
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        width: 750px;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

const AboutContent = styled.div`
    color: white;
    font-family: 'Poppins';
    max-width: 50ch;

    > h2{
        font-size: 5rem;
    }

    > p{
        font-size: 1.1rem;
    }
`;