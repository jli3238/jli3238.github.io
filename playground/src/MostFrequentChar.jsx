import React, { useState } from 'react';
import PageContainer from '../src/PageContainer';

const MostFrequentChar = () => {   
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

  return (
    <PageContainer 
        title='Find the Character that Appears Most Often in a String' 
        description='Find the character that appears most often in a string.' >
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
    </PageContainer>)      
}

export default MostFrequentChar;