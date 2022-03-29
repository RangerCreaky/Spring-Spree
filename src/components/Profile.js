import React from 'react';
import styled from 'styled-components';

const Profile = ()=>{
    return (
        <ProfileContainer>
            <div class="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-10 mt-5 pt-5 ">
                        <div className='bg'>
                        <div className="row z-depth-3 card-actual">
                            <div className="col-sm-4 left-card rounded-left">
                                <div className="card-block text-center text-black">
                                    <img className='profile-picture' src='https://picsum.photos/150' alt='' />
                                    <h2 className="font-weight-bold mt-4">Name</h2>
                                    <p> National Institute of Technology Warangal </p>
                                </div>
                            </div>
                            <div className="col-sm-8 rounded-right card-right">
                                <h3 className="heading mt-3 text-center">Information</h3>
                                <hr className="hr" />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Email:</p>
                                        <h6 className=" text-muted">nick32@gmail.com</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Phone:</p>
                                        <h6 className="text-muted">+921234567890</h6>
                                    </div>
                                </div>
                                <h4 className="mt-3 text-center">Registration Details</h4>
                                <hr className="hr"/>
                                <h5 className='text-center'> You have Bought : </h5>
                                <div className='inner-cards'>
                                    <div className='inner-card'>
                                        
                                        <img className='registration-img' src="../../images/temp1.png" alt='' />

                                        <div className='inner-card-content'>
                                            <h4> Registration + Accomodation </h4>
                                            <h5> Amount : &#x20B9; 300 </h5>
                                            Status : paid
                                        </div>
                                    </div>
                                </div>
                                
                                <a href='/' className='anchor text-center d-block'> view all offers available for spring spree22 </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileContainer>
    )
};

export default Profile;

const ProfileContainer = styled.div`
    @media (max-width : 650px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        /* margin-bottom: 20px; */
    }
    width: 100%;
    height: 100vh;
    background: url("../../images/springspree22_69.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

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

    .hr{
        width: 10%;
        margin: 0 auto 20px auto; 
        height: 5px;
        color: var(--c);
        background-color: var(--c);
        opacity: 1;
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
        background-color: var(--c);

        @media (max-width: 650px) {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-left-radius: 0;
        }
        /* clip-path: polygon(0% 0% , 20% 30% , 40% 40% , 100% 100%); */
    }
`;





