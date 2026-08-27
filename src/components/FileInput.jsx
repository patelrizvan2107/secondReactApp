import Button from "@mui/material/Button";
import { useField } from "formik";
import React from "react";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 10
  ,
  whiteSpace: "nowrap",
  width: 1,
});
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";


function FileInput({multiple, ...props}) {

    const [ field, meta , helper] = useField(props)
    const {setValue} = helper;

    console.log(meta);
    console.log(meta.error && meta.touched , meta.error);
    
    
  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          {...field}
          {...props}
          value= {""}
          type="file"
          onChange={(event) => {
            let pimage = Array.from(event.target.files);
            console.log('asdfa',pimage);

            setValue( pimage);
            // setTouched( true, false);
          }}
          multiple = {multiple}
        />
      </Button>
      <p className="error">
        {meta.error && meta.touched ? meta.error : ""}
      </p>

      <div>
        {field.value?.map((v) => (
          <img src={URL.createObjectURL(v)} className="preview" />
        ))}
      </div>
    </>
  );
}

export default FileInput;
