import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useField } from 'formik';
function CheckBox({ value, ...props }) {
    const [field, meta] = useField(props);
    console.log(props.name);
    console.log(field);
    console.log(meta);


    return (
        <FormGroup

            {...field}
            name={props.name}
            error={meta.error && meta.touched}

        >
            <FormControlLabel control={<Checkbox  value={"Coding"} />} label="Coding" />
            <FormControlLabel control={<Checkbox />} label="Music" />
            <FormControlLabel control={<Checkbox />} label="Reading" />

            <p>{meta.error && meta.touched ? meta.error : ""}</p>
        </FormGroup>
    );
}

export default CheckBox;