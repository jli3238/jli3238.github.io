import React from 'react';
import Card from './Card';
import './App.css';

export default function Column({column, columnIndex, onMoveLeft, onDelete, onMoveRight, onAddCard, newCardNames, onNewCardNamesChange}) {
  return (
    <div className="column">
      <div className="columnTitle">{column.name}</div>
      <div className="cards">
        {column && column.cards && column.cards.length > 0 && column.cards.map((card, cardIndex) =>
          <Card 
            key={card.name} 
            card={card}
            cardIndex={cardIndex} 
            first={columnIndex === 0}
            last={columnIndex === 2}
            onMoveLeft={() => onMoveLeft(cardIndex)}
            onDelete={() => onDelete(cardIndex)}
            onMoveRight={() => onMoveRight(cardIndex)} />
        )}
      </div>
      <div className="add-card">
        <input 
          type="text" 
          value={newCardNames[columnIndex]} 
          onChange={e => onNewCardNamesChange(e)} 
          placeholder="Type new card name..." />
        <button onClick={() => onAddCard()}>{"+"}</button>
      </div>
    </div>
  );
}