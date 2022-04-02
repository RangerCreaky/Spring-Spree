import React from "react";
// FIXME : uncomment this later
// import { Link } from "react-router-dom";
import styled from "styled-components";
// FIXME : uncomment this later
// import { useAuth } from "../hooks/auth";

const LandingPageContainer = () => {
  // FIXME : uncomment this later
  // const { user } = useAuth();
  return (
    <Container>
      <img
        src="../../images/springspree22_74.png"
        alt="springspree22_74"
        className="logo"
      />
      <div data-depth="0" id="event-title" className="layer">
        <div>
          <h1 className="titlename">
            SpringSpree'<span className="year">22</span>
          </h1>
          <p className="themename">Srishti</p>
          <p className="event-dates">April 8-10, 2022</p>
          { /* FIXME : uncomment me later */}
          {/* <div className="action">
            {!user ? (
              <Link to="/signup" className="btn btn-primary">
                Register
              </Link>
            ) : user.paidForEvent === 0 ? (
              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            ) : (
              <Link to="/profile" className="btn btn-primary">
                Profile
              </Link>
            )}
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default LandingPageContainer;

const Container = styled.div`
  /* height: 100vh; */
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  background: url("../../images/springspree22_71.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .action a {
    color: white;
  }

  > .logo {
    position: absolute;
    z-index: 100;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(50vw, 250px) !important;
  }

  > .bg {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
  }
  > #event-title {
    > div {
      position: absolute;
      top: 68%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 110;

      > h1 {
        font-family: "Steinfeld";
        white-space: nowrap;
        font-weight: 900;
        padding: 0 50px;
        background: -webkit-linear-gradient(90deg, #fb3981 0%, #fdbb2d 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: clamp(90px, 10vw, 5rem);
        line-height: normal !important;

        @media (max-width: 600px) {
          font-size: 56px;
        }
        @media (max-width: 400px) {
          font-size: 45px;
        }
      }
      > .themename {
        background: -webkit-linear-gradient(90deg, #8412f3 0%, #fb3981 100%);
        margin-top: -15px;
        font-size: clamp(47px, 6vw, 3rem);
        white-space: nowrap;
        font-weight: 400;
        padding: 0 50px;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: cursive;
      }

      > .event-dates {
        white-space: nowrap;
        font-weight: 500;
        padding: 0 50px;
        color: white;
        font-family: "Source Sans Pro", sans-serif;
        font-weight: 800;
        font-size: larger;
        font-size: 1.5rem;
      }
    }
  }
`;
