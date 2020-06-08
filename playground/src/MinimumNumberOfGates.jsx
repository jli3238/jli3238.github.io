import React, { useRef, useState } from 'react';
import PageContainer from '../src/PageContainer';

const MinimumNumberOfGates = () => {
    
  const arrInput = useRef(null);
  const deptInput = useRef(null);
  const [maxNumberOfGates, setMaxNumberOfGates] = useState(0);
  function calculateMaxNumberOfGates() {
    const arr = arrInput.current.value.split(', ').map(i=>
      i.split(':').map(j=>parseInt(j, 10)).reduce((total, min) => total * 60 + min)); //[570, 675, 990, 435, 255];
    const dept = deptInput.current.value.split(', ').map(i=>
      i.split(':').map(j=>parseInt(j, 10)).reduce((total, min) => total * 60 + min)); //[705, 690, 785, 1005, 685];
    let maxNumber = 0, curNumber = 0, i = 0, j = 0;
    const sortedArr = arr.sort((a,b) => a-b);
    const sortedDept = dept.sort((a,b) => a-b);
    while(i < arr.length && j < dept.length){
      while (sortedArr[i] < sortedDept[j]) {
        curNumber++;
        maxNumber = Math.max(maxNumber, curNumber);
        i++;
      }
      curNumber--;
      j++;
    }
    setMaxNumberOfGates(maxNumber);
  }

  return (
    <PageContainer 
        title='Algorithm: Airport Terminal Gate Reassignment given arrival and departure schedules' 
        resultDescription='Max number of gates: '
        result={maxNumberOfGates}>
        <p>{`You are given the arrival and departure times of airplanes at an airport for a single day. Schedules for the airplanes remain the same across all days. You are to determine the number of gates the airport should have so that no plane spends time waiting for a gate.`}</p>
        <p>{`arr = [9:30, 11:15, 16:30, 7:15, 4:15]`}</p>
        <p>{`dep = [11:45, 11:30, 13:00, 16:45, 11:20]`}</p>
        <p>{`Arr array is sorted by time. And departure array is sorted by corresponding arrival times. Plane "i" arrives at time arr[i] and departs at time dep[i]`}</p>
        <p>{`Note: After some questions, it was decided that minute was the smallest unit of time we cared about. Gate was considered occupied on the arriving minute, but empty on the departing minute. And that the arrival and departure times could be represented as such as integers. e.g. Day runs from minute 0 to minute 1339 (since using a zero-based index). So our example times are represented as minutes passed 00:00.`}</p>
        <div>
            <div>
                <label>{"Enter Arrivals [hh:mm, hh:mm, ...]: "}</label>
                <input className="flight-times" type="text" ref={arrInput}/>
            </div>
            <div>
                <label>{"Enter Departures [hh:mm, hh:mm, ...]: "}</label>
                <input className="flight-times" type="text" ref={deptInput}/>
            </div>
            <button onClick={calculateMaxNumberOfGates}>Calculate Max Number of Gates</button>
        </div>
    </PageContainer>)
}

export default MinimumNumberOfGates;