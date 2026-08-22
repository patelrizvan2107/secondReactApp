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
    inputImg: string().required().test("inputImg", "Image only", (e,val) => {
      //   console.log(val.length);

      //   let arr = []
      //   arr = val.split(".").toLowerCase();

      //   console.log(arr,arr.length, arr[arr.length - 1]);


      //   let imgType = ["jpg", "jpeg", "png", "webp"]
      // console.log(!imgType.includes(arr[arr.length - 1].toLowerCase()));

      //   if(val) {
      //     if (!imgType.includes(arr[arr.length - 1])) {
      //       return true
      //   } else {
      //       return false
      //   }
      //   } else {
      //     return false
      //   }

    let file = e.target.files[0].
      console.log("e", file.size);
      console.log((val));
      

 console.log( val.split(".").pop());
 const validExtensions = ["jpg", "jpeg", "png", "webp"];
        const extension = val.split(".").pop();
      if (!val) { return false } else {

        if (!validExtensions.includes(extension)) {
          return false;
        } else   if(file.size > 1 * 1024 * 1024) {
            return false;
         } else {
            return true;
         }
        
        
      };
    }),
    gender: string().required("Select Gender"),
    hobbies: array()
      .test("hobbies", "Select Atleast two hobbies", (e,val) => {
        console.log(val);
        console.log(e.target.value);
        if (val.length >= 2) {
          return true;
        } else {
          return false;
        }
      }),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      bd: "",
      des: "",
      inputImg: "",
      gender: "",
      hobbies: [],
    },
    validationSchema: catSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleBlur, handleSubmit, touched, values, errors, handleChange } =
    formik;

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
              <input
                error={errors.inputImg && touched.inputImg}
                name="inputImg"
                type="file"
                accept="image/*"
                onChange={handleChange}
                onBlur={handleBlur}

              />

              <span>{
                errors.inputImg && touched.inputImg ? errors.inputImg : ""
              }</span>
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
              <FormGroup
                error={errors.hobbies && touched.hobbies}
                name="hobbies"
                onChange={handleChange}
                onBlur={handleBlur}


              >
                <FormControlLabel
                  value={"Singing"}
                  control={<Checkbox />}
                  label="Singing"
                />
                <FormControlLabel
                  value={"Dancing"}
                  control={<Checkbox />}
                  label="Dancing"
                />
                <FormControlLabel
                  value={"Reading"}
                  control={<Checkbox />}
                  label="Reading"
                />
              </FormGroup>
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
