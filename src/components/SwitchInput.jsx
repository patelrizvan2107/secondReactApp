import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useField } from "formik";

function SwitchInput({ label, ...props }) {
  const [data, err] = useField(props);
  return (
    <>
      <FormGroup>
        <FormControlLabel control={<Switch {...data} />} label={label} />
        <p className="error">{err.error && err.touched ? err.error : ""}</p>
      </FormGroup>
    </>
  );
}

export default SwitchInput;
