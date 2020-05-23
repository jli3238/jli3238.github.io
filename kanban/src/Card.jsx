import React from 'react';
import './App.css';

export default function Card({
  card,
  first, 
  last,
  onMoveLeft,
  onDelete,
  onMoveRight}) {
  return (
    <div className="card">
      {!first && <button onClick={onMoveLeft}>{"<"}</button>}
      <span>{card.name}<button onClick={onDelete}>{"-"}</button></span>
      {!last && <button onClick={onMoveRight}>{">"}</button>}
    </div>
  );
}