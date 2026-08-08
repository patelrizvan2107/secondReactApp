import React, { Component } from 'react'

export default class CityClass extends Component {
  render() {
    return (
      <div><h4>
        City is:{" "}
        {this.props.cn === "India"
          ? "Surat"
          : this.props.cn === "Canada"
            ? "Toronto"
            : this.props.cn === "USA"
              ? "New York"
              : this.props.cn === "UAE"
                ? "Abhu Dhabi"
                : "Select Course Please !!!"}
      </h4></div>
    )
  }
}
