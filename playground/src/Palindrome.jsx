import React, { useState } from 'react';
import PageContainer from '../src/PageContainer';

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
    <PageContainer 
        title='Algorithm: Palindrome' 
        description='A palindrome is a word, phrase, number or sequence of words that reads the same backward as forward. Punctuation and spaces between the words or lettering is allowed.'
        resultDescription='Is it Palindrome: '
        result={isPalindrome(sentenceForPalindromeCheck)} >    
        <div>
            <label>{"Enter a sentence here: "}</label>
            <input type="text" value={sentenceForPalindromeCheck} onChange={e=>handlePalindromeSentenceChange(e)}/>
        </div>
    </PageContainer>)
}

export default Palindrome; 