import React, { useState } from 'react';
import Column from './Column';
import './App.css';

export default function App() {
  // eslint-disable-next-line
  const [columns, setColumns] = useState([
    {name: 'Backlog', cards: [{name:'Card A'}]},
    {name: 'Inprogress', cards: [{name:'Card B'}]},
    {name: 'Done', cards: [{name:'Card C'}]}
  ]);

  const DIRECTION_MOVE_LEFT = -1;
  const DIRECTION_MOVE_RIGHT = 1;

  function handleMove (columnIdx, cardIdx, direction) {
    const cardMoved = columns[columnIdx].cards[cardIdx];
    const newCardsInColumnMovedFrom = columns[columnIdx].cards.filter(card => card.name !== cardMoved.name);
    const newColumnMovedFrom = {...columns[columnIdx], cards: newCardsInColumnMovedFrom};
    const newCardsInColumnMovedTo = [...columns[columnIdx + direction].cards, cardMoved];
    const newColumnMovedTo= {...columns[columnIdx + direction], cards: newCardsInColumnMovedTo};
    const newColumns = columns.map((column, columnIndex) =>
      columnIndex === columnIdx ? newColumnMovedFrom : columnIndex === columnIdx + direction ? newColumnMovedTo : column);
    setColumns(newColumns);
  }

  return (
    <div className="App">
      {columns.length > 0 && columns.map((column, columnIndex) =>
      <Column 
        key={column.name} 
        column={column}
        columnIndex={columnIndex}
        onMoveLeft={cardIndex => handleMove(columnIndex, cardIndex, DIRECTION_MOVE_LEFT)}
        onMoveRight={cardIndex => handleMove(columnIndex, cardIndex, DIRECTION_MOVE_RIGHT)}/>)}
    </div>
  );
}
