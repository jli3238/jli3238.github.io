
import React from 'react';
import PageContainer from '../src/PageContainer';

const LeastPositiveNumberNotInArray = () => {
    
  function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)  
    const sortedAWUniquePositiveElement = [...new Set(A)].filter(a => a > 0).sort((a, b) => a - b);
    if(sortedAWUniquePositiveElement.length === 0) return 1;
    const indexOfFirstElementOutOfSequence = sortedAWUniquePositiveElement.findIndex((elem, ind) => elem !== ind + 1);
    return indexOfFirstElementOutOfSequence === -1 ? sortedAWUniquePositiveElement.length + 1 : indexOfFirstElementOutOfSequence + 1;
  }

  return (
    <PageContainer 
        title='Find the Smallest Positive Integer Not Occuring in an Array' 
        resultDescription='The smallest positive integer not occuring in array [1,3,6,2,1,4], [1, 2, 3], [−1, −3], [−2, −5, -9, 1, 3, 6, 2, 1, 4], [−1000000, −5, -9, 1, 3, 6, 2, 1, -1000001, 4, 5, 2, 1000000, 8]: '
        result={`${solution([1,3,6,2,1,4])}, ${solution([1, 2, 3])}, ${solution([-1, -3])}, ${solution([-2, -5, -9, 1,3,6,2,1,4])}, ${solution([-1000000, -5, -9, 1, 3, 6, 2, 1, -1000001, 4, 5, 2, 1000000, 8])}`}>
        <p>{`Write a function: class Solution { public int solution(int[] A); } that, `}</p>
        <p>{`given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A. For example,`}</p>
        <p>{`given A = [1, 3, 6, 4, 1, 2], the function should return 5;`}</p> 
        <p>{`Given A = [1, 2, 3], the function should return 4.`}</p>
        <p>{`Given A = [−1, −3], the function should return 1.`}</p>
        <p>{`Write an efficient algorithm for the following assumptions:`}</p>
        <p>{`N is an integer within the range [1..100,000];`}</p>
        <p>{`each element of array A is an integer within the range [−1,000,000..1,000,000].`}
        </p>
    </PageContainer>)
}

export default LeastPositiveNumberNotInArray;