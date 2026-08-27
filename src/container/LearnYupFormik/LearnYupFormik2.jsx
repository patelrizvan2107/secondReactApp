import { Form, Formik } from "formik";
import React from "react";
import TextBox from "../../components/TextBox";
import { array, boolean, object, string } from "yup";
import RadioInput from "../../components/RadioInput";
import CheckBoxInput from "../../components/CheckBoxInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import FileInput from "../../components/FileInput";
import SwitchInput from "../../components/SwitchInput";

function LearnYupFormik2(props) {
  const demo = object({
    email: string().required(),
    firstName: string().required(),
    lastName: string().required(),
    country: string().required(),
    gender: string().required(),
    hobby: array().min(2, "Atleast two hobbies"),
    image: array()
      .test("profile", "Allowed only jpg, jpeg and png", (val) => {
        console.log(val);

        const alwdTyp = ["image/png", "image/jpg", "image/jpeg", "image/webpg"];
        console.log('asdc',val.map((v) => console.log(v.type)));

        return val.every((v) => alwdTyp.includes(v.type));
      })
      .test("prifile", "Image must be less than 2 mb ", (val) => {
        return val.every((v) => v.size < 2 * 1024 * 1024);
      }),
      active: boolean().oneOf([true],"Must be Active"),
  });

  const countries = [
    { value: "", lable: "Select Country" },
    { value: "India", lable: "India" },
    { value: "USA", lable: "USA" },
  ];
  const genderData = [
    { value: "male", lable: "Male" },
    { value: "female", lable: "Feamle" },
    { value: "other", lable: "Other" },
  ];
  const hobbyData = [
    { value: "Cricket", lable: "Cricket" },
    { value: "Coding", lable: "Coding" },
    { value: "Gaming", lable: "Gaming" },
  ];
  return (
    <div>
      <h1>My Form</h1>

      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          country: "",
          gender: "",
          hobby: [],
          image: [],
          active: false
        }}
        validationSchema={demo}
        onSubmit={(values, actions) => {
          console.log(values);
          // console.log(actions);
        }}
      >
        <Form>
          <TextBox name="firstName" type="text" label="First Name" />
          <TextBox name="lastName" type="text" label="Last Name" />
          <TextBox name="email" type="email" label="Email" />
          <TextBox name="country" dropDown={countries} select />

          <RadioInput name="gender" label="Gender" data={genderData} />
          <CheckBoxInput name="hobby" label={"Hobby"} data={hobbyData} />
          <FileInput name="image" multiple={true} />
          <SwitchInput name = 'active' label = 'Active'/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LearnYupFormik2;
