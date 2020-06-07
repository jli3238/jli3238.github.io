import React from 'react';
import BracketMatch from '../src/BracketMatch';
import CanWinNim from '../src/CanWinNim';
import ClockTicker from '../src/ClockTicker';
import ComponentComposition from './ComponentComposition';
import Counter from '../src/Counter';
import DecimalToHexadecimal from '../src/DecimalToHexadecimal';
import ES6Promise from '../src/ES6Promise';
import HammingDistance from '../src/HammingDistance';
import Kanban from '../src/Kanban';
import MinimumNumberOfGates from '../src/MinimumNumberOfGates';
import MostFrequentChar from '../src/MostFrequentChar';
import Palindrome from '../src/Palindrome';
import PrimeNumberCheck from '../src/PrimeNumberCheck';
import RandomColor from '../src/RandomColor';
import './css/App.css';

const App = () =>
  <>
    <BracketMatch />
    <CanWinNim />
    <ClockTicker />
    <ComponentComposition />
    <Counter />
    <DecimalToHexadecimal />
    <ES6Promise />
    <HammingDistance />
    <Kanban />
    <MinimumNumberOfGates />
    <MostFrequentChar />
    <Palindrome />
    <PrimeNumberCheck />
    <RandomColor />  
  </>

export default App;
