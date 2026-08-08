import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Password(props) {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <input type={toggle ? "password" : "text"} placeholder="Enter PassWord" />
      <button onClick={() => setToggle((t) => !t)}>
        {!toggle ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}

export default Password;

//dropdown      Country         My country is: India
