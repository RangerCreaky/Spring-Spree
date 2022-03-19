import styled from "styled-components";
import { Formik, Form } from "formik";
import Field from "./form/Field";
import * as Yup from "yup";
import authApi from "../api/auth";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useApi } from "../hooks/api";
import { useAuth } from "../hooks/auth";

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

  const handleSubmit = async (value) => {
    const res = await request(value);
    if (res.ok) {
      auth.login(res.data);
      navigate("/", { replace: true });
    } else {
      window.alert("Invalid email or password!");
    }
  };

  return (
    <Container className="container">
      <Loader loading={loading} />
      <h1>Login</h1>
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
        </Form>
      </Formik>
    </Container>
  );
}

const Container = styled.div`
  padding: 6rem 1rem 1rem;
  max-width: 500px;
`;
