import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import Footer from "../Footer";
import Loader from "../Loader";
import { useApi } from "../../hooks/api";
import commanApi from "../../api/comman";
import { useNavigate } from "react-router-dom";

const DEPARTMENTS = {
  "Content and blogging": "content_blogging",
  "Design and Deco": "design_deco",
  "Quality Control and Management": "qcm",
  "Web development": "webdev",
  "Treasury and pricing": "treasury",
  "Event coordination and conduction": "ecc",
  "Logistics and Security": "logistics",
  Proshows: "proshows",
  "Publicity and Relations": "publicity",
  Sponsorship: "sponsorship",
  Hospitality: "hospitality",
};

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  dept: "",
  message: "",
};

export default function Contacts() {
  const { loading, request } = useApi(commanApi.contacts);
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    const res = await request(values);
    if (res.ok) {
      resetForm();
      window.alert(
        "Your response is submitted! Thank you for contacting us :)"
      );
      navigate("/", { replace: true });
    } else {
      window.alert("Something went wrong!");
    }
  };

  return (
    <>
      <Loader loading={loading} />
      <Container className="container">
        <h1 className="title">Contact Us</h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="row g-3">
            <div className="col-12">
              <label htmlFor="full-name" className="form-label">
                Full Name
              </label>
              <Field
                name="name"
                required
                placeholder="Akash"
                type="text"
                className="form-control"
                id="full-name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                name="email"
                required
                placeholder="akash@gmail.com"
                type="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone/Mobile
              </label>
              <Field
                name="mobile"
                required
                placeholder="+918855885588"
                type="tel"
                className="form-control"
                id="phone"
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <Field
                as="select"
                name="dept"
                required
                id="department"
                className="form-select"
              >
                <option value="">Choose</option>
                {Object.keys(DEPARTMENTS).map((key) => (
                  <option key={key} value={DEPARTMENTS[key]}>
                    {key}
                  </option>
                ))}
              </Field>
            </div>

            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Your message
              </label>
              <Field
                as="textarea"
                name="message"
                required
                placeholder="type your message here..."
                className="form-control"
                id="message"
                rows="3"
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
  max-width: 800px;

  .title {
    margin-bottom: 2rem;
  }
`;
