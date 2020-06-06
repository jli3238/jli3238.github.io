import React from 'react';
import '../src/css/App.css';

const Card = props => 
    <div className="card">
      {!props.first && <button onClick={props.onMoveLeft}>{"<"}</button>}
      <span>{props.card.name}<button onClick={props.onDelete}>{"-"}</button></span>
      {!props.last && <button onClick={props.onMoveRight}>{">"}</button>}
    </div>

export default Card;