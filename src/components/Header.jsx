import React from "react";
import { NavLink } from "react-router";
import { Route, Routes } from "react-router";
import Nav from "react-bootstrap/Nav";
function Header(props) {
  return (
    <>
        <NavLink to={'/Emp'}>Employeee</NavLink>    
        <NavLink to={'/counter2'}>Counter2</NavLink>    
    </>
    // <div>
    //   <Nav variant="tabs" defaultActiveKey="/home">
    //     <Nav.Item>
    //       <Nav.Link href="/c">Country</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="link-1" href="/p/5">
    //         Products
    //       </Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="link-1" href="/t">
    //         Timer
    //       </Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="link-1" href="/Emp">
    //         EmpData
    //       </Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="link-1" href="/learnyupformik">
    //         LearnYupFormik
    //       </Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="link-1" href="/todo">
    //         ToDo
    //       </Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="link-1" href="/learnyupformik2">
    //         LearnYupFormik 2
    //       </Nav.Link>
    //     </Nav.Item><Nav.Item>
    //       <Nav.Link eventKey="link-1" href="/grids">
    //        Grid
    //       </Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="link-1" href="/counter2">
    //       reduxCounter
    //       </Nav.Link>
    //     </Nav.Item>
    //   </Nav>
    // </div>
  );
}

export default Header;
