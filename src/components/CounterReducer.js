import { useReducer } from 'react';
import './App.css';

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.payload;

    case 'decrement':
      return state - action.payload;

    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div className="CounterBox">
      <h2>CounterReducer</h2>
      <button
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Увеличить
      </button>
      {count}
      <button
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        Уменьшить
      </button>
    </div>
  );
};

export default CounterReducer;
