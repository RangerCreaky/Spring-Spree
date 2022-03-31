import React, { useEffect } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import eventApi from "../../api/events";
import { useApi } from "../../hooks/api";
import { useAuth } from "../../hooks/auth";
import { useEventPayment } from "../../hooks/payment";
import Loader from "../Loader";
import Pack from "./Pack";

const Register = () => {
  const specialEvent = useApi(eventApi.specialEvents);
  const eventPayment = useEventPayment();
  const navigate = useNavigate();
  const { updateUser, user } = useAuth();

  useEffect(() => {
    specialEvent.request();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (event) => async () => {
    const payment = await eventPayment.makePayment({ event, specialEvent: 1 });
    if (payment) {
      await updateUser();
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 500);
    }
  };

  const data = specialEvent.data?.filter((el) => el.home);
  const loading = specialEvent.loading || eventPayment.loading;

  if (user && user.isVerified !== 0)
    return <Navigate to="/verifyMail" replace />;

  return (
    <RegisterContainer>
      <Loader loading={loading} />
      {data?.map((event) => {
        return (
          <Pack
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
  margin-top: 100px;
  padding: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: #ffffff;
`;
