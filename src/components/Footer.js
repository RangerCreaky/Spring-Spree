import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <MainContent>
          <LeftBox>
            <div className="content">
              <img
                src="../../images/logo.png"
                alt="spree-logo"
                className="footer-logo"
              />
            </div>
          </LeftBox>

          <CenterBox>
            <h2>Links</h2>
            <div className="content-with-underline">
              <div>
                <span className="text">
                  <a href="/">Home</a>
                </span>
              </div>
              <div>
                <span className="text">
                  <a href="#about">About</a>
                </span>
              </div>
              <div>
                <span className="url text">
                  <a href="https://www.youtube.com/watch?v=RaSRQDaoARY">
                    Trailer
                  </a>
                </span>
              </div>
            </div>
          </CenterBox>

          <RightBox>
            <h2>Let's Connect</h2>
            <div className="content-with-underline">
              <div className="content">
                <div className="place">
                  <span className="fas fa-map-marker-alt"></span>
                  <span className="text">
                    {" "}
                    <a
                      href="https://nitw.ac.in"
                      rel="noreferrer"
                      target="_blank"
                    >
                      National Institute of Technology Campus ,<br />
                      fathimanagar, Telangana 506004
                    </a>
                  </span>
                </div>
                <div className="phone">
                  <span className="fas fa-phone-alt"></span>
                  <span className="text">
                    <a href="tel:0870 245 9191">0870 245 9191</a>
                  </span>
                </div>
                <div className="page">
                  <span className="fas fa-home"></span>
                  <span className="text">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.nitw.ac.in"
                    >
                      https://www.nitw.ac.in
                    </a>
                  </span>
                </div>
              </div>
              <div className="social">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/nitw.springspree"
                >
                  <span className="fab fa-facebook-f"></span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/springspree_nitw/"
                >
                  <span className="fab fa-instagram"></span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/watch?v=RaSRQDaoARY"
                >
                  <span className="fab fa-youtube"></span>
                </a>
              </div>
            </div>
          </RightBox>
        </MainContent>

        <Bottom>
          <center>
            <span className="credit">
              Created By Springspree'22 WebDev Team |{" "}
            </span>
            <span className="far fa-copyright"></span>
            <span> 2022 All rights reserved.</span>
          </center>
        </Bottom>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  bottom: 0;
  width: 100%;
  background: rgb(1, 1, 1);
  position: relative;
  color: #d9d9d9;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
`;

const MainContent = styled.div`
  display: flex;
  padding: 70px 0 30px 0;

  > div {
    flex-basis: 50%;
    padding: 20px;

    > h2 {
      font-size: 1.125rem;
      font-weight: 600;
    }

    > .content-with-underline {
      margin: 20px 0 0 0;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        top: -10px;
        height: 2px;
        width: 100%;
        background: #1a1a1a;
      }

      &::after {
        position: absolute;
        content: "";
        height: 2px;
        width: 15%;
        background: #1b98d7;
        top: -10px;
      }
    }

    > .content {
      margin: 20px 0 0 0;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        top: -10px;
        height: 2px;
        width: 100%;
      }

      &::after {
        position: absolute;
        content: "";
        height: 2px;
        width: 15%;
        top: -10px;
      }
    }
  }
`;

const LeftBox = styled.div`
  > .content {
    > .footer-logo {
      height: 100%;
      width: 50%;
      display: block;
      margin: auto;
    }
  }
`;

const CenterBox = styled.div`
  > .content-with-underline {
    > div {
      .text {
        font-size: 1.0625rem;
        font-weight: 300;
        > a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
`;

const RightBox = styled.div`
  > .content-with-underline {
    > .social {
      margin: 20px 0 0 0;

      > a {
        padding: 0 2px;

        > span {
          height: 40px;
          width: 40px;
          background: #2685d8;
          line-height: 40px;
          text-align: center;
          font-size: 18px;
          border-radius: 100px;
          transition: 0.3s;

          &:hover {
            background: #43abe7;
          }
        }
      }
    }

    > .content {
      > .phone {
        margin: 15px 0;
        > .text {
          > a {
            font-size: 1.0625rem;
            font-weight: 300;
            color: white;
            text-decoration: none;
          }
        }
      }

      > .place {
        > .fas {
          margin-right: 2px;
        }
        > .text {
          > a {
            font-size: 1.0625rem;
            font-weight: 300;
            color: white;
            text-decoration: none;
          }
        }
      }

      > .page {
        .text {
          > a {
            font-size: 1.0625rem;
            font-weight: 300;
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }
`;

const Bottom = styled.div``;
