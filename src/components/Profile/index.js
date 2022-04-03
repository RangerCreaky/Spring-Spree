import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { QRCode } from "react-qrcode-logo";

import Offer from "./Offer";
import offerData from "./offerData";

import Field from "./Field";
import { useAuth } from "../../hooks/auth";
import { Link, Navigate } from "react-router-dom";

import { BsCheck2Circle, BsXCircle } from "react-icons/bs";
import { useEventPayment } from "../../hooks/payment";
import Loader from "../Loader";
import CardContainer from "../Events/CardContainer";
import { FcDownload } from "react-icons/fc";
import { AiOutlineCopy } from "react-icons/ai";

const eventOrder = ["entry", "accomodation", "ps1", "ps2", "ps3"];

const Profile = () => {
  const { user, logout, updateUser } = useAuth();
  const [eventToPay, setEventToPay] = useState([]);
  const eventPayment = useEventPayment();
  const total = eventToPay.reduce((pre, cur) => pre + cur.registration_fee, 0);
  const userOffer = offerData.filter((e) => !user?.[e.slug]);

  const toggleToCart = (event) => (e) => {
    if (e.target.checked) setEventToPay([...eventToPay, event]);
    else setEventToPay(eventToPay.filter((x) => x.key !== event.key));
  };

  const downloadQr = async () => {
    const qr = document.getElementById("user-qr-code");
    if (qr) {
      const a = document.createElement("a");
      a.href = qr.toDataURL();
      a.download = `spring-spree-qr.png`;
      a.click();
    }
  };

  const checkout = async () => {
    if (eventToPay.length === 0) {
      alert("please select some items above");
      return;
    }

    const event = {
      key: eventToPay
        .map((e) => e.key)
        .sort((a, b) => eventOrder.indexOf(a) - eventOrder.indexOf(b))
        .join(","),
      registration_fee: total,
      name: "Spring Spree 22 - Special events",
    };
    const res = await eventPayment.makePayment({ event, specialEvent: 1 });
    if (res) {
      alert("Payment successfull");
      await updateUser();
    }
    setEventToPay([]);
  };

  const copyReferral = () => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(user._id).then((r) => {
        alert("Referral code copied");
      });
    } else {
      alert("You browser does not soppurt copying");
    }
  };

  useEffect(() => {
    updateUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) return <Navigate to="/" replace />;
  if (user.isVerified !== 0) return <Navigate to="/verifyMail" replace />;

  return (
    <Container>
      <Loader loading={eventPayment.loading} />
      <ProfileContainer>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="mt-5 pt-5">
              <div className="bg">
                <div className="row z-depth-3 card-actual">
                  {user?.email?.split("@")?.[1] !== "student.nitw.ac.in" && (
                    <div className="col-md-3 left-card rounded-left">
                      <div className="card-block d-flex flex-column align-items-center justify-content-center">
                        <QRCode
                          id="user-qr-code"
                          size={200}
                          style={{ borderRadius: "2px" }}
                          bgColor="#f1f1f1"
                          value={user._id}
                          logoImage="/images/springspree22_74.png"
                          qrStyle="dots"
                          logoOpacity={0.2}
                          logoWidth={170}
                          eyeRadius={[
                            [10, 10, 0, 10],
                            [10, 10, 10, 0],
                            [10, 0, 10, 10],
                          ]}
                        />
                        <button className="btn" onClick={downloadQr}>
                          <FcDownload size={20} />
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="col-md-9 rounded-right card-right ps-3">
                    <h3 className="heading mt-3 text-center">Profile</h3>
                    <hr className="hr" />

                    <div className="row field-wrapper">
                      <Field label="name">{user?.name}</Field>
                      <Field label="email">{user?.email}</Field>
                      <Field label="mobile">{user?.mobile}</Field>
                      <Field label="gender">{user?.gender}</Field>
                      <Field label="college">{user?.college}</Field>
                      <Field label="level">{user?.level}</Field>
                      <Field label="Referral Count">
                        {user?.referralCount}
                      </Field>
                      <Field
                        label={
                          <>
                            Referral Code{" "}
                            <button
                              className="btn btn-link"
                              onClick={copyReferral}
                            >
                              <AiOutlineCopy />
                            </button>
                          </>
                        }
                      >
                        {user?._id}
                      </Field>
                      <Field label="paid for event">
                        <BoolIcon value={user?.paidForEvent} />
                      </Field>
                      <Field label="Accomodation">
                        <BoolIcon value={user?.paidForAccomodation} />
                      </Field>
                      <Field label="Proshow 1">
                        <BoolIcon value={user?.paidForProshow1} />
                      </Field>
                      <Field label="Proshow 2">
                        <BoolIcon value={user?.paidForProshow2} />
                      </Field>
                      <Field label="Proshow 3">
                        <BoolIcon value={user?.paidForProshow3} />
                      </Field>
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
        {userOffer?.length ? (
          <div className="billing-wrapper">
            {userOffer.map(({ key, name, tag, registration_fee }) => (
              <Offer
                key={key}
                name={name}
                tag={tag}
                price={registration_fee}
                onChange={toggleToCart({ key, registration_fee })}
              />
            ))}

            <div className="pay">
              <h4> Amount to be paid: &#8377;{total} </h4>
              <button onClick={checkout} className="btn btn-outline-dark mt-3">
                Complete Payment
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center">
            Sorry! No offer available for you now :(
          </p>
        )}
      </Billing>

      <Billing>
        <h1> Events registered </h1>
        <hr className="hr" />
        {user?.events?.length ? (
          <div className="billing-wrapper bg-dark">
            <CardContainer
              events={
                user?.events?.map((e) => ({ ...e, registered: true })) || []
              }
            />
          </div>
        ) : (
          <div className="text-center">
            <p>You have not registred for any events yet :)</p>
          </div>
        )}
      </Billing>

      <Link className="btn btn-outline-info" to="/events">
        Visit Events
      </Link>
      <button onClick={logout} className="btn btn-outline-info logout">
        Logout
      </button>
    </Container>
  );
};

const BoolIcon = ({ value }) => {
  if (value) return <BsCheck2Circle color="var(--bs-success)" />;
  return <BsXCircle color="var(--bs-danger)" />;
};

export default Profile;

const Container = styled.div`
  background: url("/images/springspree22_69.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .logout {
    display: block;
    margin: auto;
    margin-bottom: 20px;
  }

  .hr {
    width: 10%;
    margin: 0 auto 20px auto;
    height: 5px;
    color: var(--c);
    background-color: var(--c);
    opacity: 1;
  }
`;

const Billing = styled.div`
  margin-top: 3rem;
  margin-bottom: 25px;

  .pay {
    margin-top: 30px;
    text-align: center;
  }

  > h1 {
    text-align: center;
  }

  > p {
    text-align: center;
  }

  .billing-wrapper {
    border: 2px solid white;
    width: 75%;
    margin: auto;
    padding: 1.3rem;
    background-color: white;
    color: black;
    border-radius: 10px;
  }
`;

const ProfileContainer = styled.div`
  @media (max-width: 650px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    /* margin-bottom: 20px; */
  }
  width: 100%;
  /* height: 100vh; */

  .field-wrapper {
    margin-bottom: 20px;
  }

  .field {
    margin-bottom: 0;
  }

  .field-value {
    margin-top: 10px;
  }

  .registration-img {
    width: 100px;
    height: auto;
  }

  .anchor {
    color: blue;
  }

  .inner-cards {
    max-height: 250px;
    overflow-y: auto;
  }

  .inner-card {
    display: flex;
    border: 2px solid gray;
    margin-bottom: 20px;
  }

  .inner-card-content {
    margin-left: 30px;
  }

  .card-actual {
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 20px #4e1d4e;
  }

  .card-right {
    color: black;
  }

  .profile-picture {
    margin-top: 20px;
    border-radius: 150px;
  }

  .left-card {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 1rem;
    div {
      width: 100%;
      height: 100%;
      border: 5px double black;
    }
    img {
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
