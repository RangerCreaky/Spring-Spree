import { ErrorMessage, Field as BaseField } from "formik";
import styled from "styled-components";

export default function Field({ ...props }) {
  const { name } = props;
  return (
    <>
      <BaseField {...props} />
      <Error>
        <ErrorMessage name={name} />
      </Error>
    </>
  );
}

const Error = styled.small`
  color: var(--bs-danger);
  font-size: 0.8rem;
`;
