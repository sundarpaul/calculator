import React, { useState } from 'react'

function CounterState() {

    const [counter, setCounter] = useState(4);

    const decree =()=>{
        setCounter(prevCount => prevCount -1)
    }
    const incree =()=>{
        setCounter(prevCount => prevCount +1)
    }

    return (
        <div>
            <button onClick={decree}>-</button>
            <span>{counter}</span>
            <button onClick={incree}>+</button>
        </div>
    )
}

export default CounterState
