import React, { useState } from 'react';
import PageContainer from '../src/PageContainer';

const RandomColor = () => {
    const [randomColor, setRandomColor] = useState("");
    function handlePickRandomColorButtonClick() {
      const num = (val) => Math.floor(Math.random()*(val + 1));
      const clr = `rgb(${num(255)},${num(255)},${num(255)});`;
      setRandomColor(clr);
    }

    return (
        <PageContainer 
            title='Pick a Random Color' 
            description='Pick a random color by clicking the button.'
            resultDescription='The current color is: '
            result={randomColor} >
            <div>
                <button onClick={e=>handlePickRandomColorButtonClick(e)}>Pick a random color</button>
            </div>
        </PageContainer>)
}

export default RandomColor;