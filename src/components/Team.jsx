import React from "react";
import styled from "styled-components";
import { useTitle } from "../hooks/document";
import Footer from "./Footer";

export default function Team() {
  useTitle("Team - SpringSpree'22");
  return (
    <Wrapper className="container">
      <div className="content">
        <h1 className="title">TEAM</h1>
        <section className="dean-container">
          <div className="row">
            <div className="col-md-4">
              <ImageHolder
                title="Prof. A.VENU VINOD"
                subtitle="Faculty Advisor - Springspree"
                src="/images/team/venu-vinod.jpeg"
              />
            </div>
            <div className="col-md-4">
              <ImageHolder
                title="Prof. RAVI KUMAR PULI"
                subtitle="Dean student welfare"
                src="/images/team/ravi-kumar.jpg"
              />
            </div>
            <div className="col-md-4">
              <ImageHolder
                title="Dr. S. Shankar"
                subtitle="Deputy Faculty Advisor - Springspree"
                src="/images/team/shankar.jpg"
              />
            </div>
          </div>
        </section>

        <section className="team-container">
          <div className="row">
            <div className="col-md-4">
              <ImageHolder
                title="Bhavana Chukkala"
                subtitle="Frontend lead"
                src="/images/team/bhavna.jpg"
              />
            </div>
            <div className="col-md-4">
              <ImageHolder
                title="Khemraj Marathe"
                subtitle="Backend lead"
                src="/images/team/khemraj.jpg"
              />
            </div>
            <div className="col-md-4">
              <ImageHolder
                title="Arpit Goyal"
                subtitle="Frontend lead"
                src="/images/team/arpit.jpeg"
              />
            </div>
            <div className="col-md-4">
              <ImageHolder
                title="Harsh Sonkusare"
                subtitle="Backend developer"
                src="/images/team/harsh.jpeg"
              />
            </div>
            <div className="col-md-4">
              <ImageHolder
                title="Naman Tamrakar"
                subtitle="Frontend developer"
                src="/images/team/naman.jpeg"
              />
            </div>
            <div className="col-md-4">
              <ImageHolder
                title="Sarang Nagpal"
                subtitle="Backend developer"
                src="/images/team/sarang.jpeg"
              />
            </div>
            <div className="col-md-4">
              <ImageHolder
                title="Navaneeth Penumarthi"
                subtitle="Frontend developer"
                src="/images/team/navaneeth.jpeg"
              />
            </div>
            <div className="col-md-4">
              <ImageHolder
                title="Rachit Bathla"
                subtitle="App developer"
                src="/images/team/rachit.jpeg"
              />
            </div>
            <div className="col-md-4">
              <ImageHolder
                title="Ajay Veeraveni"
                subtitle="Frontend Developer"
                src="/images/team/ajay.jpg"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
}

const ImageHolder = ({ className, src, alt, title, subtitle }) => {
  return (
    <ImageStyled className={className} data-aos="zoom-in-up">
      <div className="img-holder">
        <img src={src} alt={alt} />
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </ImageStyled>
  );
};

const Wrapper = styled.div`
  margin-top: 4rem;

  .content {
    max-width: 900px;
    margin: auto;

    > .title {
      text-align: center;
      padding-top: 2rem;
      margin-bottom: 1rem;
    }

    section {
      margin: 1rem 0;
    }
  }
`;

const ImageStyled = styled.div`
  padding: 2rem 0;

  .title {
    font-weight: 600;
    font-size: 1.1rem;
    text-transform: uppercase;
  }

  .subtitle {
    color: #cfcfcf;
    font-weight: 400;
    font-size: 0.9rem;
    text-transform: capitalize;
  }

  .img-holder {
    cursor: pointer;
    transition: all 200ms;
    text-align: center;
    img {
      padding: 5px;
      border: 2px solid #ff730e;
      height: 250px;
      width: 220px;
      object-fit: cover;
      object-position: center;
    }
    &:hover {
      transform: scale(1.02) translateY(5px);
    }
  }
`;
