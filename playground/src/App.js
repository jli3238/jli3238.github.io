import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import BracketMatch from '../src/BracketMatch';
import CanWinNim from '../src/CanWinNim';
import CatPictures from './CatPictures/CatPictures';
import ClockTicker from '../src/ClockTicker';
import ComponentComposition from './ComponentComposition';
import Counter from '../src/Counter';
import DecimalToHexadecimal from '../src/DecimalToHexadecimal';
import ES6Promise from '../src/ES6Promise';
import HammingDistance from '../src/HammingDistance';
import InfiniteScrolling from '../src/InfiniteScrolling';
import Kanban from './Kanban/Kanban';
import KanbanDND from './KanbanDND/KanbanDND';
import LeastPositiveNumberNotInArray from '../src/LeastPositiveNumberNotInArray';
import MinimumNumberOfGates from '../src/MinimumNumberOfGates';
import MostFrequentChar from '../src/MostFrequentChar';
import NumberOfIslands from '../src/NumberOfIslands';
import Palindrome from '../src/Palindrome';
import PrimeNumberCheck from '../src/PrimeNumberCheck';
import RandomColor from '../src/RandomColor';
import RotationOfArray from '../src/RotationOfArray';
import SpiderOakFiles from '../src/SpiderOak/SpiderOakFiles';
import TestField from '../src/TestField';

import './css/App.css';

const SpacedLink = styled.span`
  flex-basis: 25%;
`;

const App = props =>
  <>
    <div className='links'>
      <SpacedLink><Link to="/BracketMatch">BracketMatch</Link></SpacedLink>
      <SpacedLink><Link to="/CanWinNim">CanWinNim</Link></SpacedLink>
      <SpacedLink><Link to="/CatPictures">Cat Pictures</Link></SpacedLink>
      <SpacedLink><Link to="/ClockTicker">ClockTicker</Link></SpacedLink>
      <SpacedLink><Link to="/ComponentComposition">ComponentComposition</Link></SpacedLink>
      <SpacedLink><Link to="/Counter">Counter</Link></SpacedLink>
      <SpacedLink><Link to="/DecimalToHexadecimal">DecimalToHexadecimal</Link></SpacedLink>
      <SpacedLink><Link to="/ES6Promise">ES6Promise</Link></SpacedLink>
      <SpacedLink><Link to="/HammingDistance">HammingDistance</Link></SpacedLink>
      <SpacedLink><Link to="/InfiniteScrolling">InfiniteScrolling</Link></SpacedLink>
      <SpacedLink><Link to="/Kanban">Kanban</Link></SpacedLink>
      <SpacedLink><Link to="/">Kanban DND</Link></SpacedLink>
      <SpacedLink><Link to="/LeastPositiveNumberNotInArray">Least Positive Number Not In Array </Link></SpacedLink>
      <SpacedLink><Link to="/MinimumNumberOfGates">MinimumNumberOfGates</Link></SpacedLink>
      <SpacedLink><Link to="/MostFrequentChar">MostFrequentChar</Link></SpacedLink>
      <SpacedLink><Link to="/NumberOfIslands">NumberOfIslands</Link></SpacedLink>
      <SpacedLink><Link to="/Palindrome">Palindrome</Link></SpacedLink>
      <SpacedLink><Link to="/PrimeNumberCheck">PrimeNumberCheck</Link></SpacedLink>
      <SpacedLink><Link to="/RandomColor">RandomColor</Link></SpacedLink>
      <SpacedLink><Link to="/RotationOfArray">RotationOfArray</Link></SpacedLink>
      <SpacedLink><Link to="/TestField">TestField</Link></SpacedLink>
      <SpacedLink><Link to="/SpiderOakFiles">SpiderOakFiles</Link></SpacedLink>
    </div>
    <Switch>
      <Route path="/BracketMatch" component={BracketMatch} />
      <Route path="/CanWinNim" component={CanWinNim} />
      <Route path="/CatPictures" component={CatPictures} />
      <Route path="/ClockTicker" component={ClockTicker} />
      <Route path="/ComponentComposition" component={ComponentComposition} />
      <Route path="/Counter" component={Counter} />
      <Route path="/DecimalToHexadecimal" component={DecimalToHexadecimal} />
      <Route path="/ES6Promise" component={ES6Promise} />
      <Route path="/HammingDistance" component={HammingDistance} />
      <Route path="/InfiniteScrolling" component={InfiniteScrolling} />
      <Route path="/Kanban" component={Kanban} />
      <Route path="/LeastPositiveNumberNotInArray" component={LeastPositiveNumberNotInArray} />
      <Route path="/MinimumNumberOfGates" component={MinimumNumberOfGates} />
      <Route path="/MostFrequentChar" component={MostFrequentChar} />
      <Route path="/NumberOfIslands" component={NumberOfIslands} />
      <Route path="/Palindrome" component={Palindrome} />
      <Route path="/PrimeNumberCheck" component={PrimeNumberCheck} />
      <Route path="/RandomColor" component={RandomColor} />
      <Route path="/RotationOfArray" component={RotationOfArray} />
      <Route path="/SpiderOakFiles" component={SpiderOakFiles} />
      <Route path="/TestField" component={TestField} />
      <Route path="/" component={KanbanDND} />
    </Switch>
  </>
      
export default App;
