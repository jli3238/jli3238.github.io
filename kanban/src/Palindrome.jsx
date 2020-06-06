import React, { useState } from 'react';

const Palindrome = () => {    
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
    <>
        <div className="section-title">Algorithm: Palindrome</div> 
        <div className="section-body">
            <p>{`A palindrome is a word, phrase, number or sequence of words that reads the same backward as forward. Punctuation and spaces between the words or lettering is allowed.`}</p>
            <div>
            <label>{"Enter a sentence here: "}</label>
            <input type="text" value={sentenceForPalindromeCheck} onChange={e=>handlePalindromeSentenceChange(e)}/>
            </div>
            <span><label>{`Is it Palindrome: `}</label><span className="algorithm-result">{isPalindrome(sentenceForPalindromeCheck)}</span></span>
        </div>
    </>)
}

export default Palindrome; 