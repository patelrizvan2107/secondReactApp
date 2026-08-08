import React, { Component } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
export default class PasswordClass extends Component {

    constructor(props) {
        super(props);
         
        this.state = {
            toggle: true,
        }
    }
    

  render() {
    return (
      <div>
            <input type={this.state.toggle ? "password" : "text"} placeholder="Enter PassWord" />
            <button onMouseEnter={() => this.setState(({toggle: !this.state.toggle}))}>
              {!this.state.toggle ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
    )
  }
}
