import React from 'react';
import './App.css';

export default function Card({card, first, last}) {
  return (
    <div className="card">
      {!first && <button>{"<"}</button>}
      <span>{card.name}</span>
      {!last && <button>{">"}</button>}
    </div>
  );
}