import React, { useState, useEffect } from "react";


function Timer(props) {

    const [timer, setTimer] = useState(new Date());

    useEffect(() => {

        const tick = () => {
            setTimer(new Date());
        }; 
        
        const timeRef = setInterval(tick, 1000);        

        return () => {
            clearInterval(timeRef);
            console.log("stopped");
        };
    }, []);
    return (
        <div>
            <h2>Current Time:</h2>
            <p>{timer.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timer;