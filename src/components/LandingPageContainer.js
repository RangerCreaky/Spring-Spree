import React from 'react';
import styled from 'styled-components';

const LandingPageContainer = () => {
    return (
        <Container>
            <img src="../../images/logo.png" alt='logo' />
            <ul>
                <li data-depth="0.06" id="background" className="layer">
                    <img src="/images/background.png" alt="logo" />
                </li>
                <li data-depth="0.06" id="left" className="layer left-right">
                    <img src="/images/left-cropped.png" alt="logo" />
                </li>
                <li data-depth="0.06" id="right" className="layer left-right">
                    <img src="/images/right-cropped.png" alt="logo" />
                </li>
            </ul>


            <div data-depth="0" id="event-title" className="layer">
                <div>
                    <h1 className="titlename">SpringSpree'22</h1>
                    <p className="themename">Srishti</p>
                    <p className="event-dates">April 8-10, 2022</p>
                </div>
            </div>
            {/* <LandingPageContainer >
                         <ul id="landing-view-scene">
                            
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
                    </LandingPageContainer> */}
        </Container>
    )
}

export default LandingPageContainer;

const Container = styled.div`
    /* height: 100vh; */
    min-height: 800px;
    position : relative;
    overflow: hidden;

    /* background: url("../../images/background.png"); */
    > ul{
        width: 100%;
        > #background{
            > img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height : 100%;
            }
        }

        > #left{
            > img{
                position: absolute;
                top: 0; 
                left: 0;

                /* width: 100%;
                height: auto; */

                @media (max-width : 600px){
                    left: -150px;
                }
            }
        }

        > #right{
            > img{
                position: absolute;
                top: 0;
                right: 0;
                /* width: 100%;
                height: auto; */

                @media (max-width : 600px){
                    right: -150px;
                }

            }
        }

        > .left-right{

        }
    }

    > img{
        position: absolute;
        z-index: 100;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min( 50vw, 250px) !important;
    }

    > #event-title{
            > div{
                
                position: absolute;
                top: 68%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                z-index: 110;

                > h1 {
                    font-family: "Steinfeld";
                    white-space: nowrap;
                    font-weight: 900;
                    padding: 0 50px;
                    background: -webkit-linear-gradient(90deg, #FB3981 0%, #FDBB2D 100%);
                    -webkit-background-clip: text;
                    background-clip : text;
                    -webkit-text-fill-color: transparent;
                    font-size: clamp(90px, 10vw, 5rem);
                    line-height: normal !important;

                    @media (max-width : 600px){
                        font-size: 56px;
                    }
                    @media (max-width : 400px){
                        font-size: 45px;
                    }
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
`;
