import React from 'react';
import styled from 'styled-components';

const SponsorItem = ()=>{
    return (
        <>
            <SponsorItemContainer>
                <img src="https://picsum.photos/150" alt="" />

                <SponsorItemText>
                    <h5> Company </h5>
                    <p> title sponsor </p>
                </SponsorItemText>
            </SponsorItemContainer>
        </>
    )
}

export default SponsorItem;

const SponsorItemContainer = styled.div`

    > img { 
        border : 2px solid white;
    }
`;

const SponsorItemText = styled.div``;