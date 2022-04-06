import styled from "styled-components";
import { Formik, Form } from "formik";
import Field from "./form/Field";
import * as Yup from "yup";
import authApi from "../api/auth";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import { useApi } from "../hooks/api";
import Footer from "./Footer";
import { useTitle } from "../hooks/document";

const initialValues = {
  password1: "",
  password2: "",
};

const schema = Yup.object().shape({
  password1: Yup.string().required().min(8).label("Password"),
  password2: Yup.string()
    .required()
    .oneOf([Yup.ref("password1"), null], "Passwords did not match"),
});

export default function PasswordReset() {
  useTitle("Password reset - SpringSpree'22");
  const { request, loading } = useApi(authApi.passwordReset);
  const navigate = useNavigate();
  const params = useParams();

  const handleVerify = async (value) => {
    const res = await request(params.id, value);
    if (res.ok) {
      alert("Your password reset successfully.");
      navigate("/login", { replace: true });
    } else {
      window.alert("Password reset link was expired");
    }
  };

  if (!params?.id) {
    return <Navigate to={"/"} replace />;
  }

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
              <label htmlFor="password1" className="form-label">
                Password
              </label>
              <Field
                name="password1"
                placeholder="Password"
                type="password"
                className="form-control"
                id="password1"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="password2" className="form-label">
                Confirm Password
              </label>
              <Field
                name="password2"
                placeholder="Password"
                type="password"
                className="form-control"
                id="password2"
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
