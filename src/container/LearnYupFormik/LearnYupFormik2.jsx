import { Form, Formik } from "formik";
import React from "react";
import TextBox from "../TextBox";
import { object, string } from "yup";

function LearnYupFormik2(props) {
  const demo = object({
    email: string().required(),
    firstName: string().required(),
    lastName: string().required(),
    country: string().required()
  });

  const countries = [
    {value:"", lable:"Select Country"},
    {value:"India", lable:"India"},
    {value:"USA", lable:"USA"}
  ]
  return (
    <div>
      <h1>My Form</h1>

      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          country: "",
        }}
        validationSchema={demo}
        onSubmit={(values, actions) => {
          console.log(values);
          console.log(actions);
        }}
      >
        <Form>
          <TextBox name="firstName" type="text" label="First Name" />
          <TextBox name="lastName" type="text" label="Last Name" />
          <TextBox name="email" type="email" label="Email" />
          <TextBox name="country" dropDown = {countries}    select/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LearnYupFormik2;
