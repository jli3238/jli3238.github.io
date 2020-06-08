import React, { useState } from 'react';
import PageContainer from '../src/PageContainer';

const CanWinNim = () => {
    
  const [heapSize, setHeapSize] = useState(1);
  function handleHeapSizeChange(e) {
    const userInput = e.currentTarget.value;
    setHeapSize(userInput > 0 ? userInput : 1);
  }
  function canWinNim(n) {
    return n % 4 !== 0 ? "Yes" : "No";
  }

  return (
    <PageContainer 
        title='Algorithm: Can Win Nim'
        resultDescription='Can you win Nim? '
        result={canWinNim(heapSize)} >
        <p>{`You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones. Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.`}</p>
        <p>{`Example: Input: 4; Output: false;` }</p>
        <p>{`Explanation: If there are 4 stones in the heap, then you will never win the game; No matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.`}</p>
        <div>
            <label>{"Enter number of stones: "}</label>
            <input type="number" value={heapSize} onChange={e=>handleHeapSizeChange(e)}/>
        </div>
    </PageContainer>)
}

export default CanWinNim;