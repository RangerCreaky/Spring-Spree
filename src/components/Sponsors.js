import React from 'react';
import styled from 'styled-components';

import SponsorItem from './SponsorItem';

const Sponsors = ()=>{
    return (
        <>
            <SponsorsContainer>
                <SponsorsInnerContainer>
                    <SponsorItem />
                </SponsorsInnerContainer>
            </SponsorsContainer>
        </>
    )
}

export default Sponsors;

const SponsorsContainer = styled.div`
    background-color : #333;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-items : center;
`;

const SponsorsInnerContainer = styled.div`

`;