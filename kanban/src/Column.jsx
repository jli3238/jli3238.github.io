import React from 'react';
import Card from './Card';
import './App.css';

export default function Column({column, columnIndex, onMoveLeft, onMoveRight, onAddCard, newCardNames, onNewCardNamesChange}) {
  return (
    <div className="column">
      <div className="columnTitle">{column.name}</div>
      {column && column.cards && column.cards.length > 0 && column.cards.map((card, cardIndex) =>
      <Card 
        key={card.name} 
        card={card}
        cardIndex={cardIndex} 
        first={columnIndex === 0}
        last={columnIndex === 2}
        onMoveLeft={() => onMoveLeft(cardIndex)}
        onMoveRight={() => onMoveRight(cardIndex)} />)}
      <input 
        type="text" 
        value={newCardNames[columnIndex]} 
        onChange={(e) => onNewCardNamesChange(e)} 
        placeholder="Type new card name..." />
        <button onClick={() => onAddCard()}>{"+"}</button>
    </div>
  );
}