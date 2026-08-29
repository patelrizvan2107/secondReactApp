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
import Layout from "./components/Layout";
import LearnYupFormik from "./container/LearnYupFormik/LearnYupFormik";
import TextBox from "./components/TextBox"
import LearnYupFormik2 from "./container/LearnYupFormik/LearnYupFormik2";
import TestToDo from "./container/testToDo";
import Grids from "./container/Grids";
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
        <Route path="learnyupformik" element = {<LearnYupFormik />}></Route>
        <Route path="/todo" element = {<TestToDo />}/>
        <Route path="/learnyupformik2" element = {<LearnYupFormik2 />}/>
        <Route path="/grids" element = {<Grids/>}/>
      </Routes>
      
    
      {/* <Layout>
        
      </Layout> */}
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
