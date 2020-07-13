import React, { useState } from 'react';
import PageContainer from './PageContainer';

const TestField = () => {
  // const [numOfMatchedPairs, setNumOfMatchedPairs] = useState();
  // const [leastJumps, setLeastJumps] = useState();
  // const [hgSumMax, setHgSumMax] = useState();
  // const [result, setResult] = useState('');
  const [minBribes, setMinBribes] = useState(0);

  
  // const getNumOfMatchedPairs = (n, ar) => { 
  //   n = 9;
  //   ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  //   const colorSockNumMap = new Map();
  //   for(let i=0; i<n; i++) {
  //       colorSockNumMap.set(ar[i], colorSockNumMap.has(ar[i]) 
  //           ? colorSockNumMap.get(ar[i])+1 
  //           : 1
  //       ); 
  //   }
  //   const pairs = [...colorSockNumMap.values()].map(v => Math.floor(v/2)).reduce((total,v)=>total+v);
  //   setNumOfMatchedPairs(pairs);
  // }

  // function getLeastJumps(c) {
  //   c = [0, 0, 1, 0, 0, 1, 0];
  //   let jumps = 0;
  //   let i = 0;
  //   while(i<c.length-1) {
  //       if(c[i+2] === 0) { i = i+2; jumps++;}
  //       else if(c[i+1] === 0){ i++; jumps++;}        
  //   }
  //   setLeastJumps(jumps);
  // }

  // function hourglassSum(arr) {
  //   arr = [
  //     [1, 1, 1, 0, 0, 0],
  //     [0, 1, 0, 0, 0, 0],
  //     [1, 1, 1, 0, 0, 0],
  //     [0, 0, 2, 4, 4, 0],
  //     [0, 0, 0, 2, 0, 0],
  //     [0, 0, 1, 2, 4, 0]
  //   ]
  //   const hgSumArr = [];
  //   for(let i=0; i<arr.length-2; i++) {
  //       for(let j=0; j<arr[i].length-2; j++) {
  //           const hgSum = arr[i][j]+arr[i][j+1]+arr[i][j+2]+
  //                                   arr[i+1][j+1]+
  //                         arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
  //           hgSumArr.push(hgSum);
  //       }
  //   }
  //   setHgSumMax(Math.max(...hgSumArr));
  // }
  // function rotLeft(a, d) {
  //   a=[1,2,3,4,5];
  //   d=4;
  //   setResult([...a.slice(d), ...a.slice(0,d)].join(','));
  // }
  function minimumBribes(q) {
    q=[1, 2, 5, 3, 7, 8, 6, 4];//[5, 1, 2, 3, 7, 8, 6, 4];//[2,5,1,3,4];//*//[2,1,5,3,4];//[1, 2, 5, 3, 4, 7, 8, 6];
    let minBribes = 0;
    for(let j=q.length; j>0; j--) {
      const indexOfJ = q.indexOf(j);
      if(indexOfJ<j) {
        if(j-indexOfJ-1 > 2 ) {
          minBribes = 'Too chaotic.';
          break;
        } else {
          minBribes += j-indexOfJ-1; 
        }
      }
    }
    setMinBribes(minBribes);
  }

  return (
    <PageContainer 
      title='TestField' 
      resultDescription='Result: '
      result={
        // numOfMatchedPairs
        // leastJumps
        // hgSumMax
        // result
        minBribes
      }
      description={
        // 
        // `7: [0, 0, 1, 0, 0, 1, 0].`
        // `[
        //   [1, 1, 1, 0, 0, 0]
        //   [0, 1, 0, 0, 0, 0]
        //   [1, 1, 1, 0, 0, 0]
        //   [0, 0, 2, 4, 4, 0]
        //   [0, 0, 0, 2, 0, 0]
        //   [0, 0, 1, 2, 4, 0]
        // ]`
        // `4: [1,2,3,4,5]`
        `[2,1,5,3,4]`
      } 
      >
      <button onClick={
        // getNumOfMatchedPairs
        // getLeastJumps
        // hourglassSum
        // rotLeft
        minimumBribes
        }>
          {/* Get Number of Matched Pairs */}
          {/* Get Least Jumps */}
          {/* Get Hour Glass Sum Max */}
          {/* Rotate Left */}
          Get Minimum Bribes
          </button>
    </PageContainer>) 
}

export default TestField;