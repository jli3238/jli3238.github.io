import React, { useEffect, useState } from 'react';

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
    <>
        <div className="section-title">Clock</div> 
        <div className="section-body">
            <p>{`A clock that ticks.`}</p>
            <span><label>{`The current time is: `}<span className="algorithm-result">
             {time.toLocaleTimeString()}.
            </span></label></span>
        </div>
    </>)
}

export default ClockTicker;