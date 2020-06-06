import React, { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);
    function handleCounterButtonClick() {
      setCounter(counter + 1);
    }
    function handleCounterResetButtonClick() {
      setCounter(0);
    }
  return (
    <>
        <div className="section-title">Counter by Click</div> 
        <div className="section-body">
            <p>{`Add one by click the button.`}</p>
            <div>
                <button onClick={handleCounterButtonClick}>Click to add 1</button>
                <button onClick={handleCounterResetButtonClick}>Reset the counter</button>
            </div>
            <span><label>{`The current value is: `}</label><span className="algorithm-result">{counter}</span></span>
        </div>
    </>)
}

export default Counter;