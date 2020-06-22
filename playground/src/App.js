import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import BracketMatch from '../src/BracketMatch';
import CanWinNim from '../src/CanWinNim';
import ClockTicker from '../src/ClockTicker';
import ComponentComposition from './ComponentComposition';
import Counter from '../src/Counter';
import DecimalToHexadecimal from '../src/DecimalToHexadecimal';
import ES6Promise from '../src/ES6Promise';
import HammingDistance from '../src/HammingDistance';
import InfiniteScrolling from '../src/InfiniteScrolling';
import Kanban from '../src/Kanban';
import MinimumNumberOfGates from '../src/MinimumNumberOfGates';
import MostFrequentChar from '../src/MostFrequentChar';
import Palindrome from '../src/Palindrome';
import PrimeNumberCheck from '../src/PrimeNumberCheck';
import RandomColor from '../src/RandomColor';
import SpiderOakFiles from '../src/SpiderOakFiles';

import './css/App.css';

const SpacedLink = styled.span`
  flex-basis: 25%;
`;

const App = props =>
  <>
    <div className='links'>
      <SpacedLink><Link to="/BracketMatch">BracketMatch</Link></SpacedLink>
      <SpacedLink><Link to="/CanWinNim">CanWinNim</Link></SpacedLink>
      <SpacedLink><Link to="/ClockTicker">ClockTicker</Link></SpacedLink>
      <SpacedLink><Link to="/ComponentComposition">ComponentComposition</Link></SpacedLink>
      <SpacedLink><Link to="/Counter">Counter</Link></SpacedLink>
      <SpacedLink><Link to="/DecimalToHexadecimal">DecimalToHexadecimal</Link></SpacedLink>
      <SpacedLink><Link to="/ES6Promise">ES6Promise</Link></SpacedLink>
      <SpacedLink><Link to="/HammingDistance">HammingDistance</Link></SpacedLink>
      <SpacedLink><Link to="/InfiniteScrolling">InfiniteScrolling</Link></SpacedLink>
      <SpacedLink><Link to="/">Kanban</Link></SpacedLink>
      <SpacedLink><Link to="/MinimumNumberOfGates">MinimumNumberOfGates</Link></SpacedLink>
      <SpacedLink><Link to="/MostFrequentChar">MostFrequentChar</Link></SpacedLink>
      <SpacedLink><Link to="/Palindrome">Palindrome</Link></SpacedLink>
      <SpacedLink><Link to="/PrimeNumberCheck">PrimeNumberCheck</Link></SpacedLink>
      <SpacedLink><Link to="/RandomColor">RandomColor</Link></SpacedLink>
      <SpacedLink><Link to="/SpiderOakFiles">SpiderOakFiles</Link></SpacedLink>
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
      <Route path="/InfiniteScrolling" component={InfiniteScrolling} />
      <Route path="/MinimumNumberOfGates" component={MinimumNumberOfGates} />
      <Route path="/MostFrequentChar" component={MostFrequentChar} />
      <Route path="/Palindrome" component={Palindrome} />
      <Route path="/PrimeNumberCheck" component={PrimeNumberCheck} />
      <Route path="/RandomColor" component={RandomColor} />
      <Route path="/SpiderOakFiles" component={SpiderOakFiles} />
      <Route path="/" component={Kanban} />
    </Switch>
  </>
      
export default App;
