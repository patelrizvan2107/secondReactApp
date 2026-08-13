import React from "react";
import { NavLink } from "react-router";
import { Route, Routes } from "react-router";
 
function Header(props) {
  return (
    <div>
      <NavLink to="/c">Country</NavLink>
      <NavLink to="/p/5">Products</NavLink>
      <NavLink to="/t">Timer</NavLink>
    </div>
  );
}

export default Header;
