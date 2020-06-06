import React, { useEffect, useRef,useState } from 'react';

const DecimalToHexadecimal = props => {
    
  const [decimalNumber, setDecimalNumber] = useState(0);
  const decimalNumberToHexadecimalNumberRef = useRef(null);
  useEffect(() => {
    decimalNumberToHexadecimalNumberRef.current.focus();
  }, [])  
  function handleDecimalNumberChange(e) {
    const value = e.currentTarget.value > 0 ? e.currentTarget.value : 0;
    setDecimalNumber(value);
  }
  const getHexadecimalNumber = () => parseInt(decimalNumber, 10).toString(16);
  return (
    <>
        <div className="section-title">Convert a Decimal Number to Hexadecimal Number</div> 
        <div className="section-body">
          <p>{`Convert a decimal number to hexadecimal number.`}</p>
          <div>
            <label>Enter a decimal number to convert: </label>
            <input type="number" value={decimalNumber} ref={decimalNumberToHexadecimalNumberRef} onChange={e=>handleDecimalNumberChange(e)}/>
          </div>
          <span><label>{`The hexadecimal of it is: `}</label><span className="algorithm-result">{getHexadecimalNumber()}</span></span>
        </div>
      </>)
}

export default DecimalToHexadecimal;