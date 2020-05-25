import React, { useState } from 'react';
import Column from './Column';
import './App.css';

export default function App() {
  const [columns, setColumns] = useState([
    {name: 'Backlog', cards: [{name:'Card A'}]},
    {name: 'Inprogress', cards: [{name:'Card B'}]},
    {name: 'Done', cards: [{name:'Card C'}]}
  ]);
  const [newCardNames, setNewCardNames] = useState(['','','']);
  const DIRECTION_MOVE_LEFT = -1;
  const DIRECTION_MOVE_RIGHT = 1;

  const [heapSize, setHeapSize] = useState(1);

  const [x, setX] = useState(1);
  const [y, setY] = useState(1);

  function handleMove(columnIdx, cardIdx, direction) {
    const cardMoved = columns[columnIdx].cards[cardIdx];
    const updatedCardsInColumnMovedFrom = columns[columnIdx].cards.filter(card => card.name !== cardMoved.name);
    const updatedCardsInColumnMovedTo = [...columns[columnIdx + direction].cards, cardMoved];
    const updatedColumnMovedFrom = {...columns[columnIdx], cards: updatedCardsInColumnMovedFrom};
    const updatedColumnMovedTo= {...columns[columnIdx + direction], cards: updatedCardsInColumnMovedTo};
    const updatedColumns = columns.map((column, columnIndex) =>
      columnIndex === columnIdx 
        ? updatedColumnMovedFrom 
        : columnIndex === columnIdx + direction 
          ? updatedColumnMovedTo 
          : column);
    setColumns(updatedColumns);
  }

  function handleAddCard(columnIdx) {
    const newCardName = newCardNames[columnIdx].trim();
    const existingCardNames = columns.map(column => column.cards.map(card => card.name)).flat(1);
    if (newCardName === '' || existingCardNames.includes(newCardName)) return;
    const newCards = [...columns[columnIdx].cards, {name: newCardNames[columnIdx]}];
    const columnWithNewCardAdded = {...columns[columnIdx], cards: newCards};
    const columnsWithNewCardAdded = columns.map((column, columnIndex) => columnIndex === columnIdx ? columnWithNewCardAdded : column);
    setColumns(columnsWithNewCardAdded);
    setNewCardNames(['','','']);
  }

  function handleNewCardNamesChange(columnIdx, e) {
    setNewCardNames(newCardNames.map((newCardName, newCardNameIndex) => newCardNameIndex === columnIdx ? e.target.value : ''));
  }

  function handleDelete(columnIdx, cardIdx) {
    const cardDeleted = columns[columnIdx].cards[cardIdx];
    const updatedCardsInColumnWithDeleted = columns[columnIdx].cards.filter(card => card.name !== cardDeleted.name);
    const updatedColumnWithDeleted = {...columns[columnIdx], cards: updatedCardsInColumnWithDeleted};
    const updatedColumns = columns.map((column, columnIndex) =>
      columnIndex === columnIdx ? updatedColumnWithDeleted : column);
    setColumns(updatedColumns);
  }

  function handleHeapSizeChange(e) {
    const userInput = e.currentTarget.value;
    setHeapSize(userInput > 0 ? userInput : 1);
  }

  function canWinNim(n) {
    return n % 4 !== 0 ? "Yes" : "No";
  }

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

  function maxNumberOfGates(arr, dept) {
    // Create a frequency map for the day
    let freqMap = new Map();
    for (let n = 0; n < arr.length; n++) {
        const a = arr[n];
        const d = dept[n];
        for (let i = a; i < d; i++) {
            let count = freqMap.has(i) ? freqMap.get(i) : 0;
            freqMap.set(i, count + 1);
        }
    }
    // Calculate the max value
    let maxVal = 0;
    for (let n in freqMap.values()) {
      if (n > maxVal) {
          maxVal = n;
      }
    }
    return maxVal;
  }

  return (
    <div>
      <div>
        <div className="section-title">Kanban App</div>
        <div className="app-kanban">
          {columns.length > 0 && columns.map((column, columnIndex) =>
            <Column 
              key={column.name} 
              column={column}
              columnIndex={columnIndex}
              newCardNames={newCardNames}
              onNewCardNamesChange={(e) => handleNewCardNamesChange(columnIndex, e)}
              onAddCard={() => handleAddCard(columnIndex)}
              onDelete={cardIndex => handleDelete(columnIndex, cardIndex)}
              onMoveLeft={cardIndex => handleMove(columnIndex, cardIndex, DIRECTION_MOVE_LEFT)}
              onMoveRight={cardIndex => handleMove(columnIndex, cardIndex, DIRECTION_MOVE_RIGHT)}/>)}
        </div>
      </div>
      <div>
        <div className="section-title">Algorithm: Can Win Nim</div>
        <div className="section-body">
          <p>{`You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones. Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.`}</p>
          <p>{`Example: Input: 4; Output: false;` }</p>
          <p>{`Explanation: If there are 4 stones in the heap, then you will never win the game; No matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.`}</p>
          <div>
            <label>{"Enter number of stones: "}</label>
            <input type="number" value={heapSize} onChange={e=>handleHeapSizeChange(e)}/>
          </div>
          <span><label>{`Can you win Nim? `}</label><span className="algorithm-result">{canWinNim(heapSize)}</span></span>
        </div>
      </div>
      <div>
        <div className="section-title">Algorithm: Hamming Distance</div>
        <div className="section-body">
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
          <span><label>{`Hamming Distance: `}</label><span className="algorithm-result">{hammingDistance(x,y)}</span></span>
        </div>
      </div>
      <div>
        <div className="section-title">Algorithm: Airport Terminal Gate Reassignment given arrival and departure schedules</div> 
        <div className="section-body">
          <p>{`You are given the arrival and departure times of airplanes at an airport for a single day. Schedules for the airplanes remain the same across all days. You are to determine the number of gates the airport should have so that no plane spends time waiting for a gate.`}</p>
          <p>{`arr = [9:30, 11:15, 16:30]`}</p>
          <p>{`dep = [11:45, 11:30, 16:45]`}</p>
          <p>{`Arr array is sorted by time. And departure array is sorted by corresponding arrival times. Plane 'i' arrives at time arr[i] and departs at time dep[i]`}</p>
          <p>{`Note: After some questions, it was decided that minute was the smallest unit of time we cared about. Gate was considered occupied on the arriving minute, but empty on the departing minute. And that the arrival and departure times could be represented as such as integers. e.g. Day runs from minute 0 to minute 1339 (since using a zero-based index). So our example times represented as:`}</p>
          <p>{`arr = [570, 675, 990]`}</p>
          <p>{`dept = [705, 690, 1005]`}</p>
          <span><label>{`Max number of gates: `}</label><span className="algorithm-result">{maxNumberOfGates([570, 675, 990],[705, 690, 1005])}</span></span>
        </div>
      </div>
    </div>
  );
}
