import React, { Component } from 'react'
import CityClass from './CityClass';

export default class CountryClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            c: ''
        }
        
    }
    
  render() {
    return (
        <div>
            <h2>Class</h2>
            <select  onChange = {(e) => this.setState(({c: e.target.value}))}>
                <option value="Select Country">Select Country</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
            </select>

           <h2>My Country is : {this.state.c}</h2>

          <CityClass cn = {this.state.c}/>
        </div>
    )
  }
}
