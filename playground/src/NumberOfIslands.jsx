import React, { useState } from 'react';
import PageContainer from '../src/PageContainer';
 
const NumberOfIslands = () => {
  const [numberOfIslands, setNumberOfIslands] = useState(0);

  const getNumberOfIslands = () => {
    const arr = [
      [0,0,1,1,0,0,0,1],
      [1,0,1,0,1,1,1,1],
      [1,0,1,0,1,1,1,1],
      [1,0,1,0,0,0,0,0],
      [1,0,1,0,0,1,0,1],
      [1,0,1,0,1,0,0,1],
      [1,0,1,0,0,0,0,1],
      [1,0,1,0,1,0,0,1]
    ];
    const max1=Math.max(...arr[0], 2, 4, 5, 1);
    console.log(max1);
    // twoDimensionalArray.current.value.replace(/[[\](\],)]/, '');
    if (arr === null) return 0;
    let numOfIslands = 0;
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j< arr[i].length; j++) {
        if(arr[i][j] === 1) {
          // increment numberOfIslands by 1
          ++numOfIslands;
          // change the value of itself or any adjacent island connected to it to 0
          changeIslandToWater(arr, i, j);
        }
      }
    }
    setNumberOfIslands(numOfIslands);
  }
  const changeIslandToWater = (arr, i, j) => {
    if(i<0 || i>=arr.length || j<0 || j>=arr[i].length || arr[i][j] === 0) return;
    arr[i][j] = 0; // itself
    changeIslandToWater(arr, i-1, j); // its adjacent island to the left;
    changeIslandToWater(arr, i+1, j); // its adjacent island to the right;
    changeIslandToWater(arr, i, j-1); // its adjacent island above;
    changeIslandToWater(arr, i, j+1); // its adjacent island below;
  }

  return (
    <PageContainer 
        title='Find the Number Of Islands' 
        resultDescription='Number of islands: '
        result={numberOfIslands}
        description={`Find the number of islands of "1":
        [
          [0,0,1,1,0,0,0,1],
          [1,0,1,0,1,1,1,1],
          [1,0,1,0,1,1,1,1],
          [1,0,1,0,0,0,0,0],
          [1,0,1,0,0,1,0,1],
          [1,0,1,0,1,0,0,1],
          [1,0,1,0,0,0,0,0],
          [1,0,1,0,1,0,0,1]
        ].`} 
        >
        <button onClick={getNumberOfIslands}>Get Number of Islands</button>
    </PageContainer>) 
}

export default NumberOfIslands;