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
    const cardMoved = columns[columnIdx].cards.find(index => index === cardIdx)[0];
    const columnMovedFrom = columns[columnIdx];
    const columnMovedTo = columns[columnIdx + direction];
    const newCardsInColumnMovedFrom = columns[columnIdx].cards.filter(card => card.name !== cardMoved.name);
    const newCardsInColumnMovedTo = [...columns[columnIdx + direction].cards, cardMoved]; 
    setColumns(...columns, 
      {...columnMovedFrom, cards: newCardsInColumnMovedFrom},
      {...columnMovedTo, cards: newCardsInColumnMovedTo},
    );
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
