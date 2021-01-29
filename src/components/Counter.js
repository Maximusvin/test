import { useState, useEffect } from 'react';
import './App.css';

const Counter = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    const totalCount = counterA + counterB;
    window.document.title = totalCount;
  }, [counterA, counterB]);

  const handleCounterAIncrement = () => {
    setCounterA(prevState => prevState + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(prevState => prevState + 1);
  };

  return (
    <div className="CounterBox">
      <button type="button" onClick={handleCounterAIncrement}>
        Кликнули {counterA} раз
      </button>
      <button type="button" onClick={handleCounterBIncrement}>
        Кликнули {counterB} раз
      </button>
    </div>
  );
};

export default Counter;
