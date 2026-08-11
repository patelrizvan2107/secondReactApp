import React, { useState } from 'react';
import { useEffect } from 'react';

function Timer(props) {
    // 1. Initial value
    const [timer, setTimer] = useState(new Date())

    const tick = () => {
         setTimer(new Date())
    }

    useEffect(() => {
        //3. work for fetch time and etc componentDidMount
       const timeRef = setInterval(tick, 1000)

        //5. 5. it is used to realese some of components componentWillUnmount
        return () => {
            clearInterval(timeRef)
            // console.log('hello motherfather');
            
        }


        //4.componentDidUpdate ->  it is used to work after props/satate value changed. and also when the dependency value changed it call the useEffect function 
        //depedency arrat -> state/ props -> value changed -> useEffect function called.
    } ,[])

    // 2. reder call every time when value changed
    return (
        <div>
            <p>
                {timer.toLocaleTimeString()}
            </p>
        </div>
    );
}

export default Timer;