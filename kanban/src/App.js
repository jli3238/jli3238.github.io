import React, { useState } from 'react';
import Column from './Column';
import './App.css';

export default function App() {
  const [columns, setColumns] = useState([
    {name: 'Backlog', cards: [{name:'Card A'}]},
    {name: 'Inprogress', cards: [{name:'Card B'}]},
    {name: 'Done', cards: [{name:'Card C'}]}
  ]);
  const [newCardNames, setNewCardNames] = useState(['','','']);

  const DIRECTION_MOVE_LEFT = -1;
  const DIRECTION_MOVE_RIGHT = 1;

  function handleMove(columnIdx, cardIdx, direction) {
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

  function handleAddCard(columnIdx) {
    const newCardName = newCardNames[columnIdx].trim();
    const existingCardNames = columns.map(column => column.cards.map(card => card.name)).flat(1);
    if (newCardName === '' || existingCardNames.includes(newCardName)) return;
    const newCards = [...columns[columnIdx].cards, {name: newCardNames[columnIdx]}];
    const columnWithNewCardAdded = {...columns[columnIdx], cards: newCards};
    const columnsWithNewCardAdded = columns.map((column, columnIndex) => columnIndex === columnIdx ? columnWithNewCardAdded : column);
    setColumns(columnsWithNewCardAdded);
    setNewCardNames(['','','']);
  }

  function handleNewCardNamesChange(columnIdx, e) {
    setNewCardNames(newCardNames.map((newCardName, newCardNameIndex) => newCardNameIndex === columnIdx ? e.target.value : ''));
  }

  function handleDelete(columnIdx, cardIdx) {
    const cardDeleted = columns[columnIdx].cards[cardIdx];
    const updatedCardsInColumnWithDeleted = columns[columnIdx].cards.filter(card => card.name !== cardDeleted.name);
    const updatedColumnWithDeleted = {...columns[columnIdx], cards: updatedCardsInColumnWithDeleted};
    const updatedColumns = columns.map((column, columnIndex) =>
      columnIndex === columnIdx ? updatedColumnWithDeleted : column);
    setColumns(updatedColumns);
  }

  return (
    <div className="App">
      {columns.length > 0 && columns.map((column, columnIndex) =>
      <Column 
        key={column.name} 
        column={column}
        columnIndex={columnIndex}
        newCardNames={newCardNames}
        onNewCardNamesChange={(e) => handleNewCardNamesChange(columnIndex, e)}
        onAddCard={() => handleAddCard(columnIndex)}
        onDelete={cardIndex => handleDelete(columnIndex, cardIndex)}
        onMoveLeft={cardIndex => handleMove(columnIndex, cardIndex, DIRECTION_MOVE_LEFT)}
        onMoveRight={cardIndex => handleMove(columnIndex, cardIndex, DIRECTION_MOVE_RIGHT)}/>)}
    </div>
  );
}
