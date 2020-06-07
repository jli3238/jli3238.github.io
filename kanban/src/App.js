import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
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

const App = props =>
  <>
    <div>
      <div><Link to="/BracketMatch">BracketMatch </Link></div>
      <div><Link to="/CanWinNim">CanWinNim </Link>
      <Link to="/ClockTicker">ClockTicker </Link>
      <Link to="/ComponentComposition">ComponentComposition </Link>
      <Link to="/Counter">Counter </Link></div>
      <div><Link to="/DecimalToHexadecimal">DecimalToHexadecimal </Link></div>
      <div><Link to="/ES6Promise">ES6Promise </Link></div>
      <div><Link to="/HammingDistance">HammingDistance </Link></div>
      <div><Link to="/">Kanban </Link></div>
      <div><Link to="/MinimumNumberOfGates">MinimumNumberOfGates </Link>
      <Link to="/MostFrequentChar">MostFrequentChar </Link></div>
      <div><Link to="/Palindrome">Palindrome </Link>
      <Link to="/PrimeNumberCheck">PrimeNumberCheck </Link></div>
      <div><Link to="/RandomColor">RandomColor </Link></div>
    </div>
    <Switch>
      <Route path="/BracketMatch" component={BracketMatch} />
      <Route path="/CanWinNim" component={CanWinNim} />
      <Route path="/ClockTicker" component={ClockTicker} />
      <Route path="/ComponentComposition" component={ComponentComposition} />
      <Route path="/Counter" component={Counter} />
      <Route path="/DecimalToHexadecimal" component={DecimalToHexadecimal} />
      <Route path="/ES6Promise" component={ES6Promise} />
      <Route path="/HammingDistance" component={HammingDistance} />
      <Route path="/MinimumNumberOfGates" component={MinimumNumberOfGates} />
      <Route path="/MostFrequentChar" component={MostFrequentChar} />
      <Route path="/Palindrome" component={Palindrome} />
      <Route path="/PrimeNumberCheck" component={PrimeNumberCheck} />
      <Route path="/RandomColor" component={RandomColor} />
      <Route path="/" component={Kanban} />
    </Switch>
  </>
      
export default App;
