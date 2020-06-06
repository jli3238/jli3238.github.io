import React, { useState } from 'react';

const BracketMatch = () => {
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

    return (
        <>
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
        </>)
}

export default BracketMatch;