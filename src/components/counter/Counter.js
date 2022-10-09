import React, { useState } from 'react'
import './Counter.css'

// This file has errors. The errors are not marked.
// Read through the logic to find and correct the errors.
// Some errors may be in Counter.css

const CounterButton = ({ increment, updateCount, shouldRun=true}) => {
    const displayText = 
        increment < 0 ? '+' : 
            increment > 0 ? '-' : 
            ' ';

    if (!shouldRun) {
        return <div />
    }
    return ( 
        <button className="counter-butt" onClick={() => updateCount(increment)}>{displayText}</button>
    )
}   

const Counter = () => {
    const [count, setCount] = useState("0");
    const updateCount = (increment) => {
        setCount(count => count + increment)
    }
    return (
    <div className="counter-outer-wrapper">
        <div className="counter-wrapper">
            <h1>Counter</h1>
            <p>The <span className="bold">Counter</span> component is broken. Fix it to complete the lab.</p>
            <div className="counter-row">
                <CounterButton increment={-1} updateCount={updateCount} />
                <div className="counter-val">{count}</div>
                <CounterButton increment={1} updateCount={updateCount} shouldRun={false}/>
            </div>

        </div>
    </div>
    )
}

export default Counter;
