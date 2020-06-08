import React, { useEffect, useState } from 'react';
import PageContainer from '../src/PageContainer';

const ClockTicker = () => {
    
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  function tick() {
    setTime(new Date());
  };

  return (
    <PageContainer 
        title='Clock'
        description='A clock that ticks.'
        resultDescription='The current time is: '
        result={`${time.toLocaleTimeString()}.`}>
    </PageContainer>
    )
}

export default ClockTicker;