import React from 'react';
import styled from 'styled-components';

const SponsorItem = ({ name, src }) => {
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
                        {/* <p> <strong> title Sponsor </strong> </p> */}
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
    

    > .image-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.3rem;

        > img{
            width: 293px;
            height: 159px;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1);

            &:hover{
                transform: scale(1.1);
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

