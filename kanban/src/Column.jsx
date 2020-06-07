import React from 'react';
import Card from '../src/Card';
import '../src/css/App.css';

 const Column = props =>
 
    <div className="column">
      <div className="columnTitle">{props.column.name}</div>
      <div className="cards">
        {props.column && props.column.cards && props.column.cards.length > 0 && props.column.cards.map((card, cardIndex) =>
          <Card 
            key={card.name} 
            card={card}
            cardIndex={cardIndex} 
            first={props.columnIndex === 0}
            last={props.columnIndex === 2}
            onMoveLeft={() => props.onMoveLeft(cardIndex)}
            onDelete={() => props.onDelete(cardIndex)}
            onMoveRight={() => props.onMoveRight(cardIndex)} />
        )}
      </div>
      <div className="add-card">
        <input 
          type="text"
          value={props.newCardNames[props.columnIndex]} 
          onChange={e => props.onNewCardNamesChange(e)} 
          placeholder="Type new card name..." />
        <button onClick={() => props.onAddCard()}>{"+"}</button>
      </div>
    </div>

export default Column;