import React from 'react';
import styled from 'styled-components';

const FooterContainer = ()=>{
    return(
        <Container>
            <div className='image'>
                <img src='../../images/logo.png' alt='' />
            </div>
            <div className='content'>
               <h1 className='orange'> Contact US </h1> 
               <h5 className='tag'> Feel free to connect our sponsorship team to sponsor us for Spring Spree'22</h5>

                <h6 className='mail'> email : sponsorship@springspree22.in </h6>
               <div className='wrapper'>
                    <div className='numbers'> 
                        <h6> Ijas Azad: 9061309867 </h6>
                        <h6> Ankush Mittal : 9672548098 </h6>
                        <h6> Shivani : 9550561220 </h6>
                    </div>
                    <div className='numbers'>
                        <h6> Sai Nigam : 7675874626 </h6>
                        <h6> Sai Madhava : 7981924356 </h6>
                        <h6> Rohit : 6303565515 </h6>

                    </div>
               </div>
            </div>
        </Container>
    )
};

export default FooterContainer;
const Container = styled.div`
    background-color: black;
    padding: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .image{
        width: 20%;
        @media (max-width : 500px){
            display: none;
        }
    }

    .content{
        width: 100%;
    }

    img{
        width: 50%;
        height: auto;
    }

    h1 , h5{
        text-align: center;
    }

    .mail{ 
        text-align: center;
        margin-top: 15px;
    }

    .wrapper{
        display: flex;
        margin-top: 10px;
        justify-content: center;

        @media (max-width : 500px) {
            display: flex;
            flex-direction: column;
        }
    }

    .numbers{
        margin-top: 10px;
        margin-left: 4rem;
    }

    .orange{
        color: orange;
    }

    .tag{
        font-family: cursive;
    }
`;
