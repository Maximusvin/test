import { useState, useEffect, useRef } from 'react';

const Clock = () => {
  const [time, setTime] = useState(() => new Date());

  const intervalID = useRef(null);

  useEffect(() => {
    intervalID.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('stop');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalID.current);
  };

  return (
    <div className="colorBox">
      <h2>Clock</h2>
      <div>
        <p>Текущее время: {time.toLocaleTimeString()}</p>
        <button type="button" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Clock;
