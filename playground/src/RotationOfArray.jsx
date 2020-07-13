import React, { useState } from 'react';
import PageContainer from './PageContainer';

const RotationOfArray = () => {
  const [arrayByRotation, setArrayByRotation] = useState([]);
  
  const generateArrayByRotation = () => { 
    const rotationArr = [];
    for(let i=0; i<9; i++){
        if(i === 0) { rotationArr[0] = [1, 4, 7, 8, 9, 6, 3, 2];
        } else if(i === 4) { rotationArr[i] = [5, 5, 5, 5, 5, 5, 5, 5];
        } else {
          const indOfI = rotationArr[0].indexOf(i+1);
          const rotationForBtnIPlus1 = [
            ...rotationArr[0].slice(indOfI),
            ...rotationArr[0].slice(0, indOfI)
          ];
          rotationArr[i]=rotationForBtnIPlus1;
        }
    };
    setArrayByRotation(rotationArr);
  }
      return (
        <PageContainer 
          title='Generate array by rotation' 
          resultDescription='Generated array: '
          result={arrayByRotation.map(arr => '['+arr.toString()+']').toString()}
          description={`Generate the 2-dimensional array through generating the other array elements by rotating the first array element:
          [1, 4, 7, 8, 9, 6, 3, 2].`} 
          >
          <button onClick={generateArrayByRotation}>Get Number of Islands</button>
        </PageContainer>) 
}

export default RotationOfArray;