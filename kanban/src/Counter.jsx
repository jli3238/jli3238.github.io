import React, { useState } from 'react';
import PageContainer from '../src/PageContainer';

const Counter = () => {

    const [counter, setCounter] = useState(0);
    function handleCounterButtonClick() {
      setCounter(counter + 1);
    }
    function handleCounterResetButtonClick() {
      setCounter(0);
    }

    return (
        <PageContainer 
            title='Counter by Click' 
            Description='Add one by click the button.'
            resultDescription='The current value is: '
            result={counter}>
            <div>
                <button onClick={handleCounterButtonClick}>Click to add 1</button>
                <button onClick={handleCounterResetButtonClick}>Reset the counter</button>
            </div>
        </PageContainer>)
}

export default Counter;