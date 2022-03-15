import React from 'react';
import styled from 'styled-components';

const SponsorItem = ()=>{
    return (
        <>
            <SponsorItemContainer>
                <img src="https://picsum.photos/300" alt="sponsor logo" />
                <SponsorBody>
                    <h1> Company </h1>
                </SponsorBody>
            </SponsorItemContainer>
        </>
    )
}

export default SponsorItem;

const SponsorItemContainer = styled.div`
    border : 4px solid white;
    border-radius : 15px;
    > img{
        border-radius : 15px;
    }
`;

const SponsorBody = styled.div`
    
`;