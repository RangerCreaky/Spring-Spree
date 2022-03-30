import React from 'react';
import styled from 'styled-components';

import Checkbox from './Checkbox';
const Offer = ({ name , tag , price })=>{
    return(
        <OfferContainer className='offer'>
            <Checkbox />
            <div className='text'>
                <h3 className='offer-name'> {name} </h3>
                <p className='small-text'> {tag} </p>
                <h6> <strong> Price : &#8377; {price} </strong> </h6>
            </div>
        </OfferContainer>
    )
};

export default Offer;

const OfferContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-left: 20px;

    .text{
        background-color: #ccc;
        padding: 20px;
    }

    .offer-name{
        margin-bottom: 0;
    }

    .hr{
        width: 10%;
        margin: 0 auto 20px auto; 
        height: 5px;
        color: var(--c);
        background-color: var(--c);
        opacity: 1;
    }
`