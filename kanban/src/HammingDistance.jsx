import React, { useState } from 'react';
import PageContainer from '../src/PageContainer';

const HammingDistance = () => {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  function handleXChange(e) {
    const x = e.currentTarget.value;
    setX(x > 0 && x < 231 ? x : 1);
  }
  function handleYChange(e) {
    const y = e.currentTarget.value;
    setY(y > 0 && y < 231 ? y : 1);
  }
  function hammingDistance(x, y) {
    let differentBits = x ^ y;
    let diff = 0;
    while (differentBits > 0) {
        diff ++;
        differentBits &= differentBits - 1;
    }
    return diff;
  };

  return (
    <PageContainer
        title='Algorithm: Hamming Distance'
        resultDescription='Hamming Distance: '
        result={hammingDistance(x,y)}>
        <p>{`The Hamming distance between two integers is the number of positions at which the corresponding bits are different. Given two integers x and y, calculate the Hamming distance.`}</p>
        <p>{`Note: 0 ≤ x, y < 231.`}</p>
        <p>{`Example: Input: x = 1, y = 4; Output: 2;`}</p>
        <p>{`Explanation:`}</p>
        <p>{`1 (0 0 0 1)`}</p>
        <p>{`4 (0 1 0 0)`}</p>
        <p>{`The second and fourth positions are where the corresponding bits are different.`}</p>
        <div>
            <label>{"Enter x: "}</label>
            <input type="number" value={x} onChange={e=>handleXChange(e)}/>
            <label>{"Enter y: "}</label>
            <input type="number" value={y} onChange={e=>handleYChange(e)}/>
        </div>
    </PageContainer>)
}

export default HammingDistance;