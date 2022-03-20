import React from 'react';
import styled from 'styled-components';

import SponsorItem from './SponsorItem';

// import sponsor images

import sponsorsData from './sponsorsData';

const Sponsors = () => {

    const renderSponsors = () => {
        return (
            sponsorsData.map((data, index) => {
                const { name, src } = data;
                return (
                    <div className='col-lg-4 col-md-6 col-sm-6 c' key={index}>
                        <SponsorItem name={name} src={src} />
                    </div>
                )
            })
        )
    }

    return (
        <SponsorContainer className='row'>
            <h2> Previous Sponsors </h2>

            {renderSponsors()}

        </SponsorContainer>
    )
}

export default Sponsors;

const SponsorContainer = styled.div`
    /* FIXME : change later*/
    /* height: 100vh;  */
    background: url("../../images/new-act-bg.jpeg");
    background-position: left top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: white;

    --bs-gutter-x : 0 !important;

    padding: 100px 100px;

    @media (max-width : 1000px){
        margin: 100px 0;
    }

    h2{
        text-align: center;
        margin: 2rem 0;
    }

    > .c{
        display: flex;
        justify-content: center;
    }
`;


