import styled from "styled-components";
import { Formik, Form } from "formik";
import Field from "./form/Field";
import * as Yup from "yup";
import authApi from "../api/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useApi } from "../hooks/api";
import { useAuth } from "../hooks/auth";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required().max(255),
  password: Yup.string().required().max(32),
});

export default function Login() {
  const { request, loading } = useApi(authApi.login);
  const auth = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = async (value) => {
    const res = await request(value);
    if (res.ok) {
      auth.login(res.data);
      if (res.data.user.isVerified !== 0)
        navigate("/verifyMail", { replace: true, state });
      else navigate(state?.from || "/", { replace: true });
    } else {
      window.alert("Invalid email or password!");
    }
  };

  return (
    <>
      <Container className="container">
        <Loader loading={loading} />
        <h1 className="title">Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Form className="row g-3">
            <div className="col-md-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                name="email"
                placeholder="akash@gmail.com"
                type="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                name="password"
                placeholder="********"
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>

            <div className="center">
              <p>
                Need an account?{" "}
                <Link to="/signup" state={state} replace>
                  Sign Up
                </Link>
              </p>
              <p>
                Forget your password?{" "}
                <Link to="/passwordResetRequest" replace>
                  password reset
                </Link>
              </p>
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
