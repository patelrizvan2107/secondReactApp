import React from "react";
import "./App.css";
import Counter from "./container/Counter";
import Password from "./container/Password";
import Country from "./container/Country";
import CountryClass from "./container/CountryClass";
import PasswordClass from "./container/PasswordClass";
import Course from "./container/Course";
import CourseClass from "./container/CourseClass";
import TimerClass from "./container/TimerClass";
import Timer from "./container/Timer";
import Products from "./container/Products";
import Header from "./components/Header";
// import { BrowserRouter } from "react-router-dom";
import EmpData from "./container/EmpData";
import { Routes,Route } from "react-router";
function App(props) {
  return (
    // jsx
    <div>
      <Header />
      <Routes>
        <Route path="/c" element={<Country />} />
        <Route path="/p/:id" element={<Products />} />
        <Route path="/t" element={<Timer />} />
        <Route path="/Emp" element = { <EmpData />}/>
      </Routes>

      {/* <Counter />
    
    <br></br> */}

      {/* <Country /> */}
      {/* <CountryClass /> */}

      <br></br>

      {/* <Password /> */}

      {/* <PasswordClass /> */}

      {/* <Course /> */}
      {/* <CourseClass /> */}

      {/* <TimerClass /> */}
      {/* <Timer/> */}

      {/* <Products /> */}

      {/* <EmpData /> */}
    </div>
  );
}

export default App;

// rsf
