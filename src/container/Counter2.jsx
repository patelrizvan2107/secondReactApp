import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'; 

import { deccrement, increment } from '../redux/actions/counter.action';
function Counter2(props) {

    const dispatch = useDispatch();
    const counterValue = useSelector(state => state.counter); 
    const handleDec = () => {
        dispatch(deccrement(1))
    }
    const handleInc = () => {
        dispatch(increment(1))
    }
    return (
        <div>
            <Button onClick = {handleDec}>-</Button>
            <span>{counterValue.count}</span>
            <Button onClick = {handleInc}>+</Button>

        </div>
    );
}

export default Counter2;