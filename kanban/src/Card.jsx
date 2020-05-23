import React from 'react';
import './App.css';

export default function Card({
  card,
  first, 
  last,
  onMoveLeft,
  onMoveRight}) {
  return (
    <div className="card">
      {!first && <button onClick={onMoveLeft}>{"<"}</button>}
      <span>{card.name}</span>
      {!last && <button onClick={onMoveRight}>{">"}</button>}
    </div>
  );
}