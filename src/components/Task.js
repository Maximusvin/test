import { useState, useEffect } from 'react';
import './App.css';

const Task = () => {
  const [text, setText] = useState(() =>
    JSON.parse(localStorage.getItem('text' ?? '')),
  );

  useEffect(() => {
    window.localStorage.setItem('text', JSON.stringify(text));
  }, [text]);

  const handleChange = event => {
    setText(event.target.value);
  };

  return (
    <form className="colorBox">
      <textarea placeholder="Text" value={text} onChange={handleChange} />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Task;
