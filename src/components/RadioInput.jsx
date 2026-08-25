import { useField } from 'formik';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioInput({ value, ...props }) {
    const [field, meta] = useField(props);

    console.log(field);
    console.log(meta);
    console.log(props);
    console.log(meta.error);


    return (
        <div>

            <FormControl>
                <FormLabel id={`1-label`}>Gender</FormLabel>
                <RadioGroup
                    {...field}
                    error={meta.error && meta.touched}
                    value={value}
                    name='gender'

                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />

                </RadioGroup>

                <p>{ meta.error && meta.touched ? meta.error : ''
}</p>

            </FormControl>

        </div>
    );
}

export default RadioInput;