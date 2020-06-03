import React, { useEffect, useState, useRef } from 'react';
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

  const [counter, setCounter] = useState(0);
  function handleCounterButtonClick() {
    setCounter(counter + 1);
  }
  function handleCounterResetButtonClick() {
    setCounter(0);
  }

  const [decimalNumber, setDecimalNumber] = useState(0);
  function handleDecimalNumberChange(e) {
    const value = e.currentTarget.value > 0 ? e.currentTarget.value : 0;
    setDecimalNumber(value);
  }
  const getHexadecimalNumber = () => parseInt(decimalNumber, 10).toString(16);

  const [randomColor, setRandomColor] = useState("");
  function handlePickRandomColorButtonClick() {
    const num = (val) => Math.floor(Math.random()*(val + 1));
    const clr = `rgb(${num(255)},${num(255)},${num(255)});`;
    setRandomColor(clr);
  }

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

  const [sentenceForMostOftenCharCheck, setSentenceForMostOftenCharCheck] = useState('');
  function handleSentenceForMostOftenCharChange(e) {
    setSentenceForMostOftenCharCheck(e.currentTarget.value);
  }
  function getMostOftenChar() {
    let charOccurrencesPairs = {};
    for (let i=0; i<sentenceForMostOftenCharCheck.length; i++) {
      let char = sentenceForMostOftenCharCheck.charAt(i);
      if (charOccurrencesPairs[char]) {
        charOccurrencesPairs[char]++;
      } else {
        charOccurrencesPairs[char] = 1;
      }
    }
    let charsWithMaxOccurrences = [];
    let maxOccurrences = 0;
    for(let pair in charOccurrencesPairs) {
      if (charOccurrencesPairs[pair] >= maxOccurrences) {
        charsWithMaxOccurrences = charOccurrencesPairs[pair] === maxOccurrences ? [...charsWithMaxOccurrences, pair] : [pair];
        maxOccurrences = charOccurrencesPairs[pair];
      }
    }
    return [charsWithMaxOccurrences, maxOccurrences];
  }

  const [bracketString, setBracketString] = useState('');
  function handleBracketStringChange(e) {
    const str = e.currentTarget.value;
    const bracketStr = str.replace(/[^([{)\]}]/g, "");
    setBracketString(bracketStr);
  }
  function areBracketsMatched() {
    let matchingArr = [];
    for (let i = 0; i < bracketString.length; i++) {
      const bracket = bracketString.charAt(i);
      if ((bracket === '}' && matchingArr[matchingArr.length -1] === '{') ||
          (bracket === ']' && matchingArr[matchingArr.length -1] === '[') ||
          (bracket === ')' && matchingArr[matchingArr.length -1] === '(')) {
          matchingArr = matchingArr.slice(0, matchingArr.length - 1);
      }else{
        if (['}', ']', ')'].includes(bracket)) return 'not ';
        matchingArr = [...matchingArr, bracket];
      }
    }
    return matchingArr.length === 0 ? '' : 'not ';
  }

  const [rates, setRates] = useState([]);
  const [ratesError, setRatesError] = useState('');
  const [areRatesLoaded, setAreRatesLoaded] = useState(false);
  const ratesApiUrl = 'data/rates.json';
  const rateRankApiUrl = 'data/rateRank.json';
  useEffect(() => {
    try {
      fetch(ratesApiUrl)
        .then(response1 => { 
          if (response1.ok) {
            return response1.json(); 
          } else { 
            throw Error(response1.statusText); 
          }})
        .then(
          result1 => {
            fetch(rateRankApiUrl)
              .then(response2 => {
                if (response2.ok) {
                  return response2.json();
                } else { 
                  throw Error(response2.statusText); 
                }})
              .then(
                result2 => {
                  setAreRatesLoaded(true);
                  const results = result1.map(res1 => { return { ...res1, rank: result2.find(res2 => res1.name === res2.name).rank }; });
                  setRates(results);
                },
                error2 => {
                  setRatesError(error2);
                }
              )
          },
          error1 => {
            setRatesError(error1);
          }
        )
    } catch (error) {
      setRatesError(error);
    }
  }, []);

  const [heapSize, setHeapSize] = useState(1);
  function handleHeapSizeChange(e) {
    const userInput = e.currentTarget.value;
    setHeapSize(userInput > 0 ? userInput : 1);
  }
  function canWinNim(n) {
    return n % 4 !== 0 ? "Yes" : "No";
  }

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

  const [sentenceForPalindromeCheck, setSentenceForPalindromeCheck] = useState('');
  function handlePalindromeSentenceChange(e) {
    setSentenceForPalindromeCheck(e.currentTarget.value);
  }
  function isPalindrome() {
    const sentenceWithCharacterOnly = sentenceForPalindromeCheck.replace(/[^\w]|_/g, "").toLowerCase();
    let isPalindrome = true;
    for (let i = 0; i <= sentenceWithCharacterOnly.length / 2; i++) {
      isPalindrome = isPalindrome && sentenceWithCharacterOnly.charAt(i) === sentenceWithCharacterOnly.charAt(sentenceWithCharacterOnly.length-i-1);
    }
    return isPalindrome.toString();
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
        <div className="section-title">Counter by Click</div> 
        <div className="section-body">
          <p>{`Add one by click the button.`}</p>
          <div>
            <button onClick={handleCounterButtonClick}>Click to add 1</button>
            <button onClick={handleCounterResetButtonClick}>Reset the counter</button>
          </div>
          <span><label>{`The current value is: `}</label><span className="algorithm-result">{counter}</span></span>
        </div>
      </div>
      <div>
        <div className="section-title">Convert a Decimal Number to Hexadecimal Number</div> 
        <div className="section-body">
          <p>{`Convert a decimal number to hexadecimal number.`}</p>
          <div>
            <label>Enter a decimal number to convert: </label>
            <input type="number" value={decimalNumber} onChange={e=>handleDecimalNumberChange(e)}/>
          </div>
          <span><label>{`The hexadecimal of it is: `}</label><span className="algorithm-result">{getHexadecimalNumber()}</span></span>
        </div>
      </div>
      <div>
        <div className="section-title">Pick a Random Color</div> 
        <div className="section-body">
          <p>{`Pick a random color by click the button.`}</p>
          <div>
            <button onClick={e=>handlePickRandomColorButtonClick(e)}>Pick a random color</button>
          </div>
          <span><label>{`The current color is: `}</label><span className="algorithm-result">{randomColor}</span></span>
        </div>
      </div>
      <div>
        <div className="section-title">Prime Number</div> 
        <div className="section-body">
          <p>{`Check  if a number is a prime number.`}</p>
          <div>
            <label>Enter a number: </label>
            <input type="number" value={number} onChange={e=>handleNumberChange(e)}/>
          </div>
          <span><label>{`This number `}<span className="algorithm-result">{isPrimeNumber()}</span>{` a prime number.`}</label></span>
        </div>
      </div>
      <div>
        <div className="section-title">Find the Character that Appears Most Often in a String</div> 
        <div className="section-body">
          <p>{`Find the character that appears most often in a string.`}</p>
          <div>
            <label>Enter a string: </label>
            <input type="text" value={sentenceForMostOftenCharCheck} onChange={e=>handleSentenceForMostOftenCharChange(e)}/>
          </div>
          <span>
            <label>{`The character${getMostOftenChar()[0].length > 1 ? 's' : ''} that appear${getMostOftenChar()[0].length > 1 ? '' : 's'} most often ${getMostOftenChar()[0].length > 1 ? 'are' : 'is'}: `}</label>
            <span className="algorithm-result">{getMostOftenChar()[0].join(',')}</span>
            <span>{`, with occurrences: `}</span>
            <span className="algorithm-result">{`${getMostOftenChar()[1]}`}</span>
            <span>{`.`}</span>
          </span>
        </div>
      </div>
      <div>
        <div className="section-title">Check if brackets are matched in a brackets-only string</div> 
        <div className="section-body">
          <p>{`Check if all brackets are matched in a bracket-only string.`}</p>
          <div>
            <label>Enter a bracket-only string: </label>
            <input type="text" value={bracketString} onChange={e=>handleBracketStringChange(e)}/>
          </div>
          <span>
            <label>{`The brackets are: `}</label>
            <span className="algorithm-result">{`${areBracketsMatched()}matched.`}</span>
          </span>
        </div>
      </div>
      <div>
        <div className="section-title">Using ES6 Promise</div> 
        <div className="section-body">
          <p>{`Show fetch data using ES6 promise.`}</p>
          <span><label>{`Rates are as follows: `}<span className="algorithm-result">
            { areRatesLoaded && <div>Loaded</div> }
            <table className="rates-table">
              { rates && rates.length !== 0 && rates.map(rate => <tr key={rate.name}>
                <td>{rate.name}</td>
                <td>{rate.years}</td>
                <td>{rate.rate}%</td>
                <td>{rate.rank}</td>
              </tr>) }
            </table>
            { ratesError !== '' && <div>{ratesError}</div> }
          </span></label></span>
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
          <p>{`arr = [9:30, 11:15, 16:30, 7:15, 4:15]`}</p>
          <p>{`dep = [11:45, 11:30, 13:00, 16:45, 11:20]`}</p>
          <p>{`Arr array is sorted by time. And departure array is sorted by corresponding arrival times. Plane 'i' arrives at time arr[i] and departs at time dep[i]`}</p>
          <p>{`Note: After some questions, it was decided that minute was the smallest unit of time we cared about. Gate was considered occupied on the arriving minute, but empty on the departing minute. And that the arrival and departure times could be represented as such as integers. e.g. Day runs from minute 0 to minute 1339 (since using a zero-based index). So our example times are represented as minutes passed 00:00.`}</p>
          <div className="flit-times-container">
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
          <span><label>{`Max number of gates: `}</label><span className="algorithm-result">{maxNumberOfGates}</span></span>
        </div>
      </div>
      <div>
        <div className="section-title">Algorithm: Palindrome</div> 
        <div className="section-body">
          <p>{`A palindrome is a word, phrase, number or sequence of words that reads the same backward as forward. Punctuation and spaces between the words or lettering is allowed.`}</p>
          <div>
            <label>{"Enter a sentence here: "}</label>
            <input type="text" value={sentenceForPalindromeCheck} onChange={e=>handlePalindromeSentenceChange(e)}/>
          </div>
          <span><label>{`Is it Palindrome: `}</label><span className="algorithm-result">{isPalindrome(sentenceForPalindromeCheck)}</span></span>
        </div>
      </div>
    </div>
  );
}
