import React, { useState } from 'react';
import PageContainer from '../src/PageContainer';

const PrimeNumberCheck = () => {    
    const [number, setNumber] = useState(1);
    function handleNumberChange(e) {
        const num = e.currentTarget.value;
        setNumber(num > 1 ? num : 1);    
    }
    function isPrimeNumber() {
        if (number < 2) return "is";
        for (let i=2; i<=Math.sqrt(number); i++) {
        if (number % i === 0) return "is not";
        }
        return "is";
    }

    return (
        <PageContainer 
            title='Prime Number' 
            description='Check  if a number is a prime number.' >
        <div>
            <label>Enter a number: </label>
            <input type="number" value={number} onChange={e=>handleNumberChange(e)}/>
        </div>
        <span><label>{`This number `}<span className="algorithm-result">{isPrimeNumber()}</span>{` a prime number.`}</label></span>
        </PageContainer>)
}

export default PrimeNumberCheck;