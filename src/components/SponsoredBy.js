import React from 'react';
import styled from 'styled-components';

const SponsoredBy = () => {
  return (
    <Container>
      <div className='line1'>
        <div className='NIT'>
          {/* <img src='../../images/springspree22_78.png' className='small-logo' alt='NIT W logo' /> */}
          <span className="name"> NIT WARANGAL </span>
        </div>

        <p className='and'> &emsp; and &emsp; </p>

        <div className='Saas'>
          <img src='../../images/sponsor-logo.png' className='small-logo saas' alt="sponsor" />
          <span className="name"> Saas Labs </span>
        </div>
      </div>

      <p className="presents"> PRESENTS </p>
    </Container>
  )
}

export default SponsoredBy;

const Container = styled.div`
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 0;
  font-size: 1.2rem;
  /* font-family: "Source Sans Pro", sans-serif; */
  /* font-family: 'Inter', sans-serif; */
/* font-family: 'Montserrat', sans-serif; */
  font-family: cursive;

  .and{
    font-size : 1rem;
    letter-spacing: 2px;
  }
  @media (max-width : 430px){
    letter-spacing: normal;
  }

  .line1{
    display: flex;
    /* align-items: flex-end; */
    align-items: center;
    justify-content: center;

    p{
      margin-bottom: 0;
    }

    .name{
      font-size: 1.3rem;
    }

    .NIT , .Saas{
      display: flex;
      align-items: center;
      /* align-items: flex-end; */
    }

    .small-logo{
      width : 40px;
      height: auto;
      margin-right: 10px;
    }

  }
  .presents{
    margin-bottom: 0;
  }
`;