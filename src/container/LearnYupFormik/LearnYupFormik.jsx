import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { array, number, object, string } from "yup";
import { useFormik } from "formik";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
function LearnYupFormik(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const catSchema = object({
    name: string()
      .required("Name is Required")
      .matches(/^[a-zA-Z]+([ '-][a-zA-Z]+)*$/, "Please Enter Valid Name !"),
    email: string()
      .required("Email is Required")
      .email("Please Enter Valid Email !"),
    number: string()
      .matches(
        /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
        "Please Enter Valid Mobile number !",
      )
      .required("Mobule Number is Required"),
    bd: string().test("bd", "Enter Valid BirtDate Date", (val) => {
      // let bDay = new Date(val)
      let crd = new Date();
      // console.log(crd);

      // console.log(bDay < crd);

      // if (bDay < crd === true) {
      //     return true
      // } else {
      //     return false
      // }

      if (crd > new Date(val)) {
        return true;
      } else {
        return false;
      }
    }),
    des: string()
      .required("Description is Required")
      .test("des", "Only 100 Charecter Allowed.", (val) => {
        console.log(val);

        let arr = val.split(" ");

        if (arr.length <= 5) {
          return true;
        } else {
          return false;
        }
      }),
    //   .min(10, "Atleast 10 Charecter")
    //   .max(100, "Only 100 Charecter Allowed."),

    gender: string().required("Select Gender"),
    hobbies: array().min(2, "Atleast two Hobbies"),
    // .test("hobbies", "Select Atleast two hobbies", (e,val) => {
    //   console.log(val);
    //   console.log(e.target.value);
    //   if (val.length >= 2) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }),
    profile: array()
      .test("profile", "Allowed only jpg, jpeg and png", (val) => {
        console.log(val);

        const alwdTyp = ["image/png", "image/jpg", "image/jpeg", "image/webpg"];
        console.log(val.map((v) => console.log(v.type)));

        return val.every((v) => alwdTyp.includes(v.type));
      })
      .test("prifile", "Image must be less than 2 mb ", (val) => {
        return val.every((v) => v.size < 2 * 1024 * 1024);
      }),
    country: string().required("Select Country"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      bd: "",
      des: "",

      gender: "",
      hobbies: [],
      profile: [],
      country: "",
    },
    validationSchema: catSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const {
    handleBlur,
    handleSubmit,
    touched,
    values,
    errors,
    handleChange,
    setFieldValue,
    setFieldTouched,
  } = formik;

  console.log(errors);

  return (
    <div>
      <h2>Learn Yup Formik Page</h2>
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Try
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Category</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit} id="subscription-form">
              <TextField
                error={errors.name && touched.name}
                margin="dense"
                id="name"
                name="name"
                label="name"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.name && touched.name ? errors.name : ""}
              />
              <TextField
                error={errors.email && touched.email}
                margin="dense"
                id="email"
                name="email"
                label="Email"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.email && touched.email ? errors.email : ""}
              />
              <TextField
                error={errors.number && touched.number}
                margin="dense"
                id="number"
                name="number"
                label="Number"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.number && touched.number ? errors.number : ""
                }
              />
              <TextField
                error={errors.bd && touched.bd}
                margin="dense"
                id="bd"
                name="bd"
                label="Birth Date"
                type="date"
                fullWidth
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.bd && touched.bd ? errors.bd : ""}
              />
              <TextField
                error={errors.des && touched.des}
                margin="dense"
                id="des"
                name="des"
                label="Description"
                type="text"
                multiline
                fullWidth
                onChange={handleChange}
                variant="standard"
                rows={4}
                onBlur={handleBlur}
                helperText={errors.des && touched.des ? errors.des : ""}
              />

              <FormControl>
                <FormLabel id={`gende-label`}>Gender</FormLabel>
                <RadioGroup
                  error={errors.gender && touched.gender}
                  row
                  aria-labelledby={`gender-label`}
                  name="gender"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  //   value={gender}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
                <p>{errors.gender && touched.gender ? errors.gender : ""}</p>
              </FormControl>
              <h5>Hobbies</h5>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="hobbies"
                      value={"Singing"}
                      checked={values.hobbies?.includes("Singing")}
                      onChange={(e) => {
                        const { checked, value } = e.target;
                        console.log(checked);

                        if (checked) {
                          setFieldValue("hobbies", [...values?.hobbies, value]);
                        } else {
                          setFieldValue(
                            "hobbies",
                            values.hobbies?.filter((v) => v !== value),
                          );
                        }
                      }}
                    />
                  }
                  label="Singing"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="hobbies"
                      value={"Coding"}
                      checked={values.hobbies?.includes("Coding")}
                      onChange={(e) => {
                        const { checked, value } = e.target;
                        console.log(checked);

                        if (checked) {
                          setFieldValue("hobbies", [...values?.hobbies, value]);
                        } else {
                          setFieldValue(
                            "hobbies",
                            values.hobbies?.filter((v) => v !== value),
                          );
                        }
                      }}
                    />
                  }
                  label="Coding"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="hobbies"
                      value={"Reading"}
                      checked={values.hobbies?.includes("Reading")}
                      onChange={(e) => {
                        const { checked, value } = e.target;
                        console.log(checked);

                        if (checked) {
                          setFieldValue("hobbies", [...values?.hobbies, value]);
                        } else {
                          setFieldValue(
                            "hobbies",
                            values.hobbies?.filter((v) => v !== value),
                          );
                        }
                      }}
                    />
                  }
                  label="Reading"
                />
              </FormGroup>
              <p className="error">
                {errors.hobbies && touched.hobbies ? errors.hobbies : ""}
              </p>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload files
                <VisuallyHiddenInput
                  name="profile"
                  type="file"
                  onChange={(event) => {
                    let pimage = Array.from(event.target.files);
                    console.log(pimage);

                    setFieldValue("profile", pimage);
                    setFieldTouched("profile", true, false);
                  }}
                  multiple
                />
              </Button>
              <p className="error">
                {errors.profile && touched.profile ? errors.profile : ""}
              </p>

              <div>
                {values.profile?.map((v) => (
                  <img src={URL.createObjectURL(v)} className="preview" />
                ))}
              </div>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="country"
                  value={values.country}
                  label="country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <MenuItem value={""}>Select Country</MenuItem>
                  <MenuItem value={"India"}>India</MenuItem>
                  <MenuItem value={"Vinland"}>Vinland</MenuItem>
                </Select>
              </FormControl>
              <p className="error">
                {errors.country && touched.country ? errors.country : ""}
              </p>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" form="subscription-form">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
}

export default LearnYupFormik;
