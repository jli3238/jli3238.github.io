import React, { useState } from 'react';
import Column from './Column';
import './App.css';

export default function App() {
  const [columns, setColumns] = useState([
    {name: 'Backlog', cards: [{name:'Card A'}]},
    {name: 'Inprogress', cards: [{name:'Card B'}]},
    {name: 'Done', cards: [{name:'Card C'}]}
  ]);
  const [newCardName, setNewCardName] = useState('');

  const DIRECTION_MOVE_LEFT = -1;
  const DIRECTION_MOVE_RIGHT = 1;

  function handleMove (columnIdx, cardIdx, direction) {
    const cardMoved = columns[columnIdx].cards[cardIdx];
    const updatedCardsInColumnMovedFrom = columns[columnIdx].cards.filter(card => card.name !== cardMoved.name);
    const updatedCardsInColumnMovedTo = [...columns[columnIdx + direction].cards, cardMoved];
    const updatedColumnMovedFrom = {...columns[columnIdx], cards: updatedCardsInColumnMovedFrom};
    const updatedColumnMovedTo= {...columns[columnIdx + direction], cards: updatedCardsInColumnMovedTo};
    const updatedColumns = columns.map((column, columnIndex) =>
      columnIndex === columnIdx 
        ? updatedColumnMovedFrom 
        : columnIndex === columnIdx + direction 
          ? updatedColumnMovedTo 
          : column);
    setColumns(updatedColumns);
  }

  function handleAddCard (columnIdx) {
    if (newCardName.trim() === '') return;
    const newCards = [...columns[columnIdx].cards, {name: newCardName}];
    const columnWithNewCardAdded = {...columns[columnIdx], cards: newCards};
    setColumns([...columns, columnWithNewCardAdded]);
  }

  return (
    <div className="App">
      {columns.length > 0 && columns.map((column, columnIndex) =>
      <Column 
        key={column.name} 
        column={column}
        columnIndex={columnIndex}
        newCardName={newCardName}
        onAddCard={() => handleAddCard(columnIndex)}
        onMoveLeft={cardIndex => handleMove(columnIndex, cardIndex, DIRECTION_MOVE_LEFT)}
        onMoveRight={cardIndex => handleMove(columnIndex, cardIndex, DIRECTION_MOVE_RIGHT)}/>)}
    </div>
  );
}
