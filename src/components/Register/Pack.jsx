import { Form, Formik } from "formik";
import React from "react";
import styled from "styled-components";
import Field from "../form/Field";

export default function Pack({
  id,
  name,
  amount,
  offlinePrice,
  onClick,
  validatePromo,
}) {
  const names = name?.split(",") || [];

  return (
    <PackStyled>
      <Type>
        <ul>
          {names.map((e, i) => {
            if (i === names.length - 1) return <li key={e}>{e}</li>;

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
        {id === "entry" && (
          <div className="border-top border-secondary py-3">
            <Formik onSubmit={validatePromo} initialValues={{ promo: "" }}>
              <Form className="row align-items-center">
                <div className="col-8">
                  <div className="input">
                    <Field
                      required
                      type="text"
                      className="form-control promo-field"
                      placeholder="PROMO"
                      name="promo"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary">
                    Apply
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        )}
        <div className="price">
          <span> {offlinePrice} </span>
          {amount}/-
        </div>
        {/* <span>/-</span> */}
        <button className="btn btn-primary" onClick={onClick}>
          Pay
        </button>
      </ButtonContainer>
    </PackStyled>
  );
}

const PackStyled = styled.div`
  max-width: 350px;
  width: 330px;
  min-width: 250px;
  min-height: 250px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-position: 50% 100%;
  backdrop-filter: blur(5px);
  border-radius: 15px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  margin: 20px;
  flex: 1 1 50%;
`;

export const Type = styled.div`
  /* background:#FFA500; */
  background-image: url("../../../images/offer-bg.png");
  background-size: cover;
  background-position: center;
  /* background:rgba(0,0,0,0.5); */
  backdrop-filter: blur(3px);
  padding: 20px;
  height: 150px;
  border-radius: 15px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  > ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  > ul > li {
    /* text-shadow:2px 2px 0 blue,-2px -2px 0 blue, 2px -2px 0 blue, -2px 2px 0 blue; */
    text-shadow: 2px 2px 2px blue;
    margin: 0 !important;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 20px;
  > .price {
    pointer-events: none;
    border: 2px solid #ffa500;
    padding: 8px 15px;
    border-radius: 10px;
    background: #000000;
    margin-right: 10px;
    flex: 1;
    text-align: center;

    span {
      text-decoration: line-through;
      color: gray;
    }
  }

  button {
    padding: 10px 15px;
    text-align: center;
    /* background: rgba(255,165,0,1); */
    border-radius: 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    flex: 1;
    background-image: linear-gradient(
      to right,
      #ff512f 0%,
      #f09819 51%,
      #ff512f 100%
    );
    background-position: 200% auto;
    color: white;
    font-weight: 900;
  }
  .promo-field {
    border-radius: 10px;
    border: 2px solid #ffa500;
  }
`;
