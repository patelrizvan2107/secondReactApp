import React, { Component } from "react";
import FeesClass from "./FeesClass";

export default class 
CourseClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: "",
    };
  }

  render() {
    return (
      <div>
            <h2>Class</h2>
        <select onChange={(e) => this.setState({ c: e.target.value })}>
          <option value="Select Country">Select Country</option>
          <option value="Full Stack">Full Stack</option>
          <option value="UI/UX">UI/UX</option>
          <option value="AI/ML">AI/ML</option>
          <option value="DS">DS</option>
        </select>
           <h2>My Course is : {this.state.c}</h2>


        <FeesClass cn={this.state.c} />
      </div>
    );
  }
}
