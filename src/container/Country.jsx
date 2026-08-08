import React, { useState } from "react";

function Country(props) {

    const [c, setC] = useState('');

    // const cd = (e) => {
    //     country = e.this.value
    // }

    return (
        <div>
            <select>
                <option value="Select Country" onChange = {(e) => setC(e.target.value)}>Select Country</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
            </select>

           <h2>My Country is : {c}</h2>
        </div>
    );
}

export default Country;