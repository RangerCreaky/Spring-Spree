import { Form, Formik } from "formik";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import authApi from "../../api/auth";
import { useApi } from "../../hooks/api";
import { useAuth } from "../../hooks/auth";
import Field from "../form/Field";
import Loader from "../Loader";
import * as Yup from "yup";
import UserDetails from "./UserDetails";

const signupSchema = Yup.object().shape({
  name: Yup.string().required().max(255),
  email: Yup.string().email().required().max(255),
  mobile: Yup.string().required().max(15),
  college: Yup.string().required().max(255),
  paymentMode: Yup.string().required().max(255),
  transactionId: Yup.string().required().max(255),
  amountPaid: Yup.number().min(0).max(3500),
});

const MODE = ["Cash", "Online"];

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  college: "",
  paymentMode: "",
  transactionId: "",
  amountPaid: 0,
  paidForAccomodation: false,
  paidForProshow1: false,
  paidForProshow2: false,
  paidForProshow3: false,
};

export default function Admin() {
  const { request, loading, data, setData } = useApi(authApi.addUser);
  const { user } = useAuth();

  const handleSubmit = async (value, { resetForm }) => {
    if (!window.confirm("Have you rechecked all the details?")) return;
    const res = await request(value);
    if (res.ok) {
      alert("User registered successfully with following details");
      resetForm();
    } else {
      window.alert("User with email or phone already exists.");
    }
  };

  const resetData = () => {
    setData(null);
  };

  if (!user?.isAdmin) return <Navigate to="/" replace />;

  return (
    <Container className="container">
      <Loader loading={loading} />
      <div className="d-flex justify-content-between">
        <h1 className="title">Add User</h1>
        <div>
          <Link to="/admin/update" className="btn btn-outline-info">
            Update User
          </Link>
        </div>
      </div>
      {!data ? (
        <Formik
          validationSchema={signupSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <Field
                autoFocus
                name="name"
                placeholder="Elon Musk"
                type="text"
                className="form-control"
                id="name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                name="email"
                placeholder="elon@mars.com"
                type="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="mobile" className="form-label">
                Mobile/Phone
              </label>
              <Field
                name="mobile"
                placeholder="+919988774455"
                type="tel"
                className="form-control"
                id="mobile"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="college" className="form-label">
                College
              </label>
              <Field
                name="college"
                placeholder="Mars Institute of Technology"
                type="text"
                className="form-control"
                id="college"
              />
            </div>
            <div className="col-md-6">
              <div className="form-check">
                <label htmlFor="accomodation" className="form-check-label">
                  Accomodation
                </label>
                <Field
                  name="paidForAccomodation"
                  type="checkbox"
                  className="form-check-input"
                  id="accomodation"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-check">
                <label htmlFor="proshow-1" className="form-check-label">
                  Proshow 1
                </label>
                <Field
                  name="paidForProshow1"
                  type="checkbox"
                  className="form-check-input"
                  id="proshow-1"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-check">
                <label htmlFor="proshow-2" className="form-check-label">
                  Proshow 2
                </label>
                <Field
                  name="paidForProshow2"
                  type="checkbox"
                  className="form-check-input"
                  id="proshow-2"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-check">
                <label htmlFor="proshow-3" className="form-check-label">
                  Proshow 3
                </label>
                <Field
                  name="paidForProshow3"
                  type="checkbox"
                  className="form-check-input"
                  id="proshow-3"
                />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="mode" className="form-label">
                Payment Mode
              </label>
              <Field
                name="paymentMode"
                placeholder="Payment mode"
                as="select"
                className="form-select"
                id="mode"
              >
                <option value="">Select</option>
                {MODE.map((gen) => (
                  <option key={gen} value={gen}>
                    {gen}
                  </option>
                ))}
              </Field>
            </div>
            <div className="col-md-6">
              <label htmlFor="transaction" className="form-label">
                Transation ID
              </label>
              <Field
                name="transactionId"
                placeholder='Fill "N/A" for cash mode'
                type="text"
                className="form-control"
                id="transaction"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="amount-paid" className="form-label">
                Amount Paid
              </label>
              <Field
                name="amountPaid"
                type="number"
                className="form-control"
                id="amount-paid"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      ) : (
        <div>
          <p className="text-success">User with following details added</p>
          <UserDetails data={data} onOk={resetData} />
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 6rem 1rem 1rem;
  max-width: 800px;

  .title {
    margin-bottom: 2rem;
  }

  .form-check-input {
    border-color: #e1e1e1;
  }

  .form-control:disabled,
  .form-select:disabled {
    background-color: #818181;
  }
`;
