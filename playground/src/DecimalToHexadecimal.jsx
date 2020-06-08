import React, { useEffect, useRef,useState } from 'react';
import PageContainer from '../src/PageContainer';

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
    <PageContainer 
        title='Convert a Decimal Number to Hexadecimal Number' 
        description='Convert a decimal number to hexadecimal number.'
        resultDescription='The hexadecimal of it is: '
        result={getHexadecimalNumber()}>
        <div>
            <label>Enter a decimal number to convert: </label>
            <input type="number" value={decimalNumber} ref={decimalNumberToHexadecimalNumberRef} onChange={e=>handleDecimalNumberChange(e)}/>
        </div>
    </PageContainer>)
}

export default DecimalToHexadecimal;