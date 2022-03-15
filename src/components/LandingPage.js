import React from 'react';
import styled from 'styled-components';
const LandingPage = ()=>{
    return (
        <>
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
        </>
    )
}

export default LandingPage;

const LandingPageContainer = styled.div`
    overflow : hidden;
    > ul{
        list-style: none;
        display: block;
    }
    > #landing-view-scene{
        @media (max-width: 1200px) {
            background-size: cover;
            background-position: top;
        }
        overflow: hidden;
        height: 100vh;
        width: 100%;
        position: relative;
        background-image: url('./images/bg_2.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;

        > #event-title{
            > div{
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
                    background: -webkit-linear-gradient(90deg, #FB3981 0%, #FDBB2D 100%);
                    -webkit-background-clip: text;
                    background-clip : text;
                    -webkit-text-fill-color: transparent;
                    font-size: clamp(90px, 10vw, 7.5rem);
                }

                > .themename{
                    background: -webkit-linear-gradient(90deg, #8412F3 0%, #FB3981 100%);
                    margin-top: -15px;
                    font-size: clamp(47px, 6vw, 3rem) ;
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
                    color : white;
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.5rem;
                }
            }
        }

        > .layer{
            position: absolute;
            width:100%;
            height: 100%;
            
            > img{
                position: absolute;
                width: 120%;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        > #logo {
            z-index: 50;
            > img{
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: min( 50vw, 250px) !important;
            }
        }

        #stars{
            z-index: 40;
            img{
                bottom: 0;
                width: 90%;
                @media (max-width: 1200px) {
                    bottom: 110px;
                }
            }
        }

        #planet{
            z-index: 20;
            img{
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
