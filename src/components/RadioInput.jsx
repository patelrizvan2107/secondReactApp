import { useField } from "formik";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RadioInput({ label, data, ...props }) {
  const [field, meta] = useField(props);

  console.log(field);
  console.log(meta);
  console.log(props);
  console.log(meta.error);

  return (
    <div>
      <FormControl>
        <FormLabel id={`${label}-label`}>{label}</FormLabel>
        <RadioGroup {...field} >
          {data.map((v) => (
            <FormControlLabel
              value={v.value}
              control={<Radio />}
              label={v.lable}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <p style={{ color: "red"}}>
        {meta.error && meta.touched ? meta.error : ""}
      </p>
    </div>
  );
}

export default RadioInput;
