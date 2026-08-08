import React, { useState } from 'react';
import Fees from './Fees';

function Course(props) {
    const [c, setC] = useState();

    // const cd = (e) => {
    //     country = e.this.value
    // }

    return (
        <div>
            <select  onChange = {(e) => setC(e.target.value)}>
                <option value="Select Country">Select Country</option>
                <option value="Full Stack">Full Stack</option>
                <option value="UI/UX">UI/UX</option>
                <option value="AI/ML">AI/ML</option>
                <option value="DS">DS</option>
            </select>

           <h2>Course is: {c}</h2>


           <Fees cn = {c} />
        </div>
    );
}

export default Course;