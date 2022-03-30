import React from 'react';
import styled from 'styled-components';

import Offer from './Offer';
import offerData from './offerData';

import Field from './Field';
import profileData from './profileData';
import { render } from 'react-dom';

const Profile = ()=>{

    const renderOffers = ()=>{
        return offerData.map((offer , index) =>{
            const {name , tag , price} = offer;

            return(
                <Offer key={index} name={name} tag={tag} price={price} />
            )   
        }); 
    }

    const renderFields = ()=>{
        return profileData.map((data , index) =>{
            const {field , value} = data;
            return(
                <Field key={index} field={field} value={value} />
            );
        });
    }


    return (
        <Container>
            <ProfileContainer>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-10 mt-5 pt-5 ">
                            <div className='bg'>
                            <div className="row z-depth-3 card-actual">
                                <div className="col-sm-4 left-card rounded-left">
                                    <div className="card-block d-flex align-items-center justify-content-center">
                                        {/* QR CODE */}
                                        <img src='../../images/tempQR.png' alt='' />
                                    </div>
                                </div>
                                <div className="col-sm-8 rounded-right card-right">
                                    <h3 className="heading mt-3 text-center">Profile</h3>
                                    <hr className="hr" />
                                    
                                    <div className="row field-wrapper">
                                        {renderFields()}
                                    </div>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProfileContainer>

            <Billing>
                <h1> Other offers </h1>
                <hr className="hr" />

                <p> Please check the boxes corresponding to the offers you want to pay for </p>
                <div className='billing-wrapper'>
                

                    {renderOffers()}


                    {/* Payment */}
                    <div className='pay'>
                        <h4> Amount to be paid: &#8377; 500 </h4>
                        <button className='btn btn-outline-dark mt-3'> Complete Payment </button>
                    </div>
                </div>



            </Billing>
        </Container>
    )
};

export default Profile;

const Container = styled.div`
    background: url("../../images/springspree22_69.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .hr{
        width: 10%;
        margin: 0 auto 20px auto; 
        height: 5px;
        color: var(--c);
        background-color: var(--c);
        opacity: 1;
    }
`;

const Billing = styled.div`
    margin-bottom: 25px;

    .pay{
        margin-top: 30px;
        text-align: center;
    }

    > h1{
        text-align: center;
        margin-top: 100px;
    }

    > p{
        text-align: center;
    }

    .billing-wrapper{
        border: 2px solid white;
        width: 75%;
        margin: auto;
        padding: 1.3rem;
        background-color: white;
        color: black;
        border-radius: 20px;
    }
`;


const ProfileContainer = styled.div`
    @media (max-width : 650px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        /* margin-bottom: 20px; */
    }
    width: 100%;
    /* height: 100vh; */


    .field-wrapper{
        margin-bottom: 20px;
    }

    .field{
        margin-bottom: 0;
    }

    .field-value{
        margin-top : 10px;
    }

    .registration-img{
        width: 100px;
        height: auto;
    }

    .anchor{
        color: blue;
    }

    .inner-cards{
        max-height: 250px;
        overflow-y: auto;
    }

    .inner-card{
        display: flex;
        border : 2px solid gray;
        margin-bottom: 20px;
    }

    .inner-card-content{
        margin-left: 30px;
    }

    .card-actual{
        background-color: white;
        border-radius: 20px;
        box-shadow: 0px 0px 20px 20px #4e1d4e;
    }

    .card-right {
        color: black;
    }

    .profile-picture{
        margin-top: 20px;
        border-radius: 150px;
    }

    .left-card{
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        padding: 1rem;
        div{
            width: 100%;
            height: 100%;
            border: 5px double black;
        }
        img{
            width: 80%;
        }
        border-right: 1px solid gray;
        @media (max-width: 650px) {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-left-radius: 0;
        }
    }
`;




