import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useField } from "formik";
import React from "react";

function CheckBoxInput({ label, data, ...props }) {
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  console.log(meta.error);
  console.log(field);
  
  
  return (
    <div>
      <h5>{label}</h5>
      <FormGroup>
        {data?.map((v) => (
          <FormControlLabel
            control={
              <Checkbox
                {...props}
                value={v.value}
                checked={field.value?.includes(v.value)}
                onChange={(e) => {
                  const { checked, value } = e.target;
                  console.log(checked, value);

                  if (checked) {
                    setValue([...field.value || [], value]);
                  } else {
                    setValue((field.value || [])?.filter((v) => v !== value));
                  }
                }}
              />
            }
            label={v.lable}
          />
        ))}
        {
          <p style={{ color: "red" }}>
            {meta.error && meta.touched ? meta.error : ""}
          </p>
        }
      </FormGroup>
    </div>
  );
}

export default CheckBoxInput;
