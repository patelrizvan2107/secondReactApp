import React, { Component } from 'react'

export default class FeesClass extends Component {
    
  render() {
    let FeesData = {
    "Full Stack": {
      fees: "650",
      duration: "6 months",
    },
    "UI/UX": {
      fees: "$300",
      duration: "4 months",
    },
    "AI/ML": {
      fees: "$1000",
      duration: "12 months",
    },
    "DS": {
      fees: "$500",
      duration: "8 months",
    },
  };
    return (
      <div>
        
        <p>Fees is {FeesData[this.props.cn]?.fees}</p>
     <p>Duration is {FeesData[this.props.cn]?.duration}</p>
      </div>
    )
  }
}
