import React from 'react';
import styled from 'styled-components';

import SponsorItem from './SponsorItem';
import FooterContainer from './FooterContainer';

// import sponsor images

import {PrevSponsorsData , currSponsorsData} from './sponsorsData';

const Sponsors = () => {

    const renderSponsors = (sponsorsData , num) => {

        // value is used just to center the sponsor card
        // remove this then current sponsors have more values.
        return (
            sponsorsData.map((data, index) => {
                const { name, src, imgName , title} = data;
                return (
                    // <div className='col-lg-4 col-md-6 col-sm-6 c' key={index}>
                    <div className={`col-lg-4 col-md-6 col-sm-6 c`} key={index}>
                        <SponsorItem alt={imgName} name={name} src={src} title={title}/>
                    </div>
                )
            })
        )
    }

    return (
        <>
            <SponsorContainer className='row'>
                <h2 className='current sponsors'> Sponsors </h2>

                {renderSponsors(currSponsorsData , 6)}

                <h2> Previous Sponsors </h2>

                {renderSponsors(PrevSponsorsData , 4)}

            </SponsorContainer>

            <FooterContainer />
        </>
    )
}

export default Sponsors;

const SponsorContainer = styled.div`

    background: rgb(14, 14, 14);
  background: linear-gradient(
    0deg,
    rgba(14, 14, 14, 1) 0%,
    rgba(11, 0, 16, 1) 15%,
    rgba(44, 0, 59, 1) 100%
  );
  background-size: cover;
  background-position: center;
    background-attachment: fixed;
    color: white;

    --bs-gutter-x : 0 !important;

    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 800;
    /* font-size: larger; */

    padding: 100px 100px;

    @media (max-width : 1000px){
        margin: 100px 0;
    }

    @media (max-width : 500px){
        margin: 67px 0;
        padding: 50px 50px;
    }

    .current{
        text-transform: uppercase;
    }

    h2{
        text-align: center;
        margin: 2rem 0;
        font-weight: 900;
    }

    > .c{
        display: flex;
        justify-content: center;
    }
`;


