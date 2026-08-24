import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useField } from "formik";
import React from "react";

function TextBox({ label, type, dropDown = [], ...props }) {
  const [field, meta] = useField(props);
  console.log(dropDown);
  
  return (
    <>
      <TextField
        {...field}
        {...props}
        error={meta.error && meta.touched}
        margin="dense"
        id="name"
        label={label}
        type={type}
        fullWidth
        variant="standard"
        helperText={meta.error && meta.touched ? meta.error : ""}
      >
        {dropDown.map((v) => (
          <MenuItem key={v.value} value={v.value}>
            {v.lable}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}

export default TextBox;
