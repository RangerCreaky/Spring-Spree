import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import eventApi from "../../api/events";
import { useApi } from "../../hooks/api";
import { useAuth } from "../../hooks/auth";
import { useEventPayment } from "../../hooks/payment";
import Loader from "../Loader";
import {
  RegisterContainer,
  Pack,
  Type,
  ButtonContainer,
} from "./Register.styles";

const Register = () => {
  const specialEvent = useApi(eventApi.specialEvents);
  const eventPayment = useEventPayment();
  const navigate = useNavigate();
  const { updateUser } = useAuth();

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

  return (
    <RegisterContainer>
      <Loader loading={loading} />
      {data?.map((event) => {
        const { _id, name, registration_fee } = event;
        const name_arr = name.split(",");
        return (
          <Pack key={_id}>
            <Type>
              <ul>
                {name_arr.map((e, i) => {
                  if (i === name_arr.length - 1) return <li key={e}>{e}</li>;

                  return (
                    <React.Fragment key={e}>
                      <li>{e}</li>
                      <li>+</li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </Type>
            <ButtonContainer>
              <span>{registration_fee}/-</span>
              <button className="btn btn-primary" onClick={handleClick(event)}>
                Pay
              </button>
            </ButtonContainer>
          </Pack>
        );
      })}
    </RegisterContainer>
  );
};

export default Register;
