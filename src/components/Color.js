import { useState } from 'react';
import './App.css';

const Color = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="colorBox">
      <h2>Color</h2>
      <p>Выбран цвет: {options[activeIndex].label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            style={{ backgroundColor: color }}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Color;
