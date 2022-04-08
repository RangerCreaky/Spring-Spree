import { useFormikContext } from "formik";
import React from "react";

export default function Checkbox({ name, ...other }) {
  const { setFieldValue, values } = useFormikContext();
  return (
    <input
      type="checkbox"
      name={name}
      checked={!!values[name]}
      {...other}
      onChange={(e) => setFieldValue(name, !!e.target.value)}
    />
  );
}
