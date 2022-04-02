import React, { useEffect } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import eventApi from "../../api/events";
import { useApi } from "../../hooks/api";
import { useAuth } from "../../hooks/auth";
import { useEventPayment } from "../../hooks/payment";
import Loader from "../Loader";
import Pack from "./Pack";
import commanApi from "../../api/comman";

const Register = () => {
  const specialEvent = useApi(eventApi.specialEvents);
  const eventPayment = useEventPayment();
  const navigate = useNavigate();
  const { updateUser, user } = useAuth();
  const validate = useApi(commanApi.validatePromo);

  useEffect(() => {
    specialEvent.request();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (event) => async () => {
    const payment = await eventPayment.makePayment({
      event,
      specialEvent: 1,
      promo: "nitw",
    });
    if (payment) {
      await updateUser();
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 500);
    }
  };

  const validatePromo =
    (event) =>
    async (values, { resetForm }) => {
      const res = await validate.request(values);
      if (res.ok) {
        const discount = (event.registration_fee * res.data?.value) / 100;
        const newEvent = {
          ...event,
          registration_fee: event.registration_fee - discount,
          ...values,
        };
        specialEvent.setData(
          data.map((d) => (d.key === event.key ? newEvent : d))
        );
        alert(`Promo code applied! you got ${res.data?.value}% discount.`);
        return;
      }

      alert("Invalid promocode!");
      resetForm();
    };

  const data = specialEvent.data?.filter((el) => el.home);
  const loading =
    specialEvent.loading || eventPayment.loading || validate.loading;

  if (user && user.isVerified !== 0)
    return <Navigate to="/verifyMail" replace />;

  return (
    <RegisterContainer>
      <Loader loading={loading} />
      {data?.map((event) => {
        return (
          <Pack
            id={event.key}
            validatePromo={validatePromo(event)}
            name={event.name}
            amount={event.registration_fee}
            onClick={handleClick(event)}
            key={event._id}
          />
        );
      })}
    </RegisterContainer>
  );
};

export default Register;

const RegisterContainer = styled.div`
  padding: 50px;
  padding-top: 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: #ffffff;
  background: url(../../images/springspree22_77.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
