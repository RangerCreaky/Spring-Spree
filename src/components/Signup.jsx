import styled from "styled-components";
import { Formik, Form } from "formik";
import Field from "./form/Field";
import * as Yup from "yup";
import authApi from "../api/auth";
import { useApi } from "../hooks/api";
import Loader from "./Loader";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useAuth } from "../hooks/auth";

const signupSchema = Yup.object().shape({
  name: Yup.string().required().max(255),
  email: Yup.string().email().required().max(255),
  mobile: Yup.string().required().max(15),
  password: Yup.string().required().min(8).max(32),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords did not match"),
  college: Yup.string().required().max(255),
  level: Yup.string().required().max(30),
});

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
  college: "",
  level: "",
};

export default function Signup() {
  const { request, loading } = useApi(authApi.signup);
  const resendMail = useApi(authApi.resendVerifyMail);
  const navigate = useNavigate();
  const { state } = useLocation();
  const auth = useAuth();

  const handleSubmit = async (value) => {
    const res = await request(value);
    if (res.ok) {
      await auth.login(res.data);
      resendMail.request();
      if (res.data.user.isVerified !== 0)
        navigate("/verifyMail", { replace: true, state });
      else navigate(state?.from || "/", { replace: true });
    } else {
      window.alert("Use with this email or phone already exists.");
    }
  };

  return (
    <>
      <Container className="container">
        <Loader loading={loading} />
        <h1 className="title">Sign Up</h1>
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
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                name="password"
                min={8}
                max={32}
                placeholder="********"
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password
              </label>
              <Field
                name="confirmPassword"
                placeholder="********"
                type="password"
                className="form-control"
                id="confirm-password"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="level" className="form-label">
                Level
              </label>
              <Field
                name="level"
                placeholder="B.Tech 4th year"
                type="text"
                className="form-control"
                id="level"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>

            <div className="center">
              <p>
                Already have an account?{" "}
                <Link to="/login" state={state} replace>
                  Login
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
  max-width: 800px;

  .title {
    margin-bottom: 2rem;
  }

  .center {
    text-align: center;
  }
`;
