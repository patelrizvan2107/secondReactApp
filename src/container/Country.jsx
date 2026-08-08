import React, { useState } from "react";
import City from './City'

function Country(props) {

    const [c, setC] = useState('');

    // const cd = (e) => {
    //     country = e.this.value
    // }

    return (
        <div>
            <select  onChange = {(e) => setC(e.target.value)}>
                <option value="Select Country">Select Country</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
            </select>

           <h2>My Country is : {c}</h2>


           <City cn = {c} />
        </div>
    );
}

export default Country;