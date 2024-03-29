import styled from "styled-components";
import { Formik, Form } from "formik";
import Field from "./form/Field";
import * as Yup from "yup";
import authApi from "../api/auth";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useApi } from "../hooks/api";
import Footer from "./Footer";
import { useAuth } from "../hooks/auth";
import { useTitle } from "../hooks/document";

const initialValues = {
  verificationCode: "",
};

const schema = Yup.object().shape({
  verificationCode: Yup.number().required().label("OTP"),
});

export default function VerifyEmail() {
  useTitle("Email verify - SpringSpree'22");
  const verifyEmail = useApi(authApi.verifyMail);
  const resendMail = useApi(authApi.resendVerifyMail);
  const navigate = useNavigate();
  const { updateUser } = useAuth();

  const handleVerify = async (value) => {
    const res = await verifyEmail.request(value);
    if (res.ok) {
      await updateUser();
      navigate("/", { replace: true });
    } else {
      window.alert("Invalid OTP");
    }
  };

  const handleResend = async () => {
    const res = await resendMail.request();
    if (res.ok) {
      alert("OTP code resent to your mail successfully.");
    }
  };

  const loading = verifyEmail.loading || resendMail.loading;
  return (
    <>
      <Container className="container">
        <Loader loading={loading} />
        <h1 className="title">Verify Email</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleVerify}
        >
          <Form className="row g-3">
            <div className="col-md-12">
              <label htmlFor="otp" className="form-label">
                OTP
              </label>
              <Field
                name="verificationCode"
                placeholder="OTP sent to your mail"
                type="text"
                className="form-control"
                id="otp"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="small-text text-center">
              {" "}
              If you didnt revieve the OTP please check the Spam folder{" "}
            </p>
            {!resendMail.data && (
              <div className="center">
                <p>
                  Not received an OTP yet?
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={handleResend}
                  >
                    Resend OTP
                  </button>
                </p>
              </div>
            )}
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
