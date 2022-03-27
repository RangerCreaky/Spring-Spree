import styled from "styled-components";
import { Formik, Form } from "formik";
import Field from "./form/Field";
import * as Yup from "yup";
import authApi from "../api/auth";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useApi } from "../hooks/api";
import Footer from "./Footer";

const initialValues = {
  email: "",
};

const schema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
});

export default function PasswordResetRequest() {
  const { request, loading } = useApi(authApi.passwordResetRequest);
  const navigate = useNavigate();

  const handleVerify = async (value) => {
    const res = await request(value);
    if (res.ok) {
      alert(
        "An email with password reset link sent to your email. Click on link to reset your password"
      );
      navigate("/", { replace: true });
    } else {
      window.alert("No user found with given email");
    }
  };

  return (
    <>
      <Container className="container">
        <Loader loading={loading} />
        <h1 className="title">Password Reset</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleVerify}
        >
          <Form className="row g-3">
            <div className="col-md-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                name="email"
                placeholder="Registered email"
                type="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  padding: 6rem 1rem 1rem;
  max-width: 500px;

  .title {
    margin-bottom: 2rem;
  }

  .center {
    text-align: center;
  }
`;
