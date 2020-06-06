import React, { useState } from 'react';

const RandomColor = () => {
    const [randomColor, setRandomColor] = useState("");
    function handlePickRandomColorButtonClick() {
      const num = (val) => Math.floor(Math.random()*(val + 1));
      const clr = `rgb(${num(255)},${num(255)},${num(255)});`;
      setRandomColor(clr);
    }
    return (
        <>
            <div className="section-title">Pick a Random Color</div> 
            <div className="section-body">
                <p>{`Pick a random color by click the button.`}</p>
                <div>
                    <button onClick={e=>handlePickRandomColorButtonClick(e)}>Pick a random color</button>
                </div>
                <span><label>{`The current color is: `}</label><span className="algorithm-result">{randomColor}</span></span>
            </div>
        </>)
}

export default RandomColor;