import React from 'react';
import styled from 'styled-components';

const SponsorItem = ({ name, src , title }) => {
    return (
        <>
            <SponsorItemContainer className='sponsor-card' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1500">
                <div className='image-container'>
                    <img src={src} alt="" />

                </div>
                <div className='text-container'>
                    <hr></hr>
                    <div className='container-fluid'>
                        <h4> <strong> {name} </strong> </h4>
                        <p> <strong> {title ? title : ""} </strong> </p>   
                    </div>
                </div>
            </SponsorItemContainer>
        </>
    )
}

export default SponsorItem;

const SponsorItemContainer = styled.div`
    background-color: white;
    width: 21rem;
    color: black;
    margin: 1rem;
    padding: 0;
    border-radius: 10px;
    font-family: 'Source Sans Pro', sans-serif;
    /* font-weight: 800; */
    /* font-size: larger; */
    
    @media (max-width : 600px) {
        /* transform: scale(1.3rem); */
    }
    > .image-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.3rem;
        overflow: hidden;


        > img{
            width: 293px;
            height: 159px;
            transition: 2s;

            &:hover{
                transform: scale(1.1);
            }

            @media (max-width : 600px) {
                width : 200px;
                height: auto;
            }
        }

    }

    > .text-container{
        > hr{
            margin: 0;
        }

        > .container-fluid{
            text-align: center;
            padding: 10px 0;

            p{
                margin-bottom: 0;
            }
        }
    }
`;

