import useLocalStorage from '../Hooks/useLocalStorage';
import './App.css';

const Task = () => {
  const [text, setText] = useLocalStorage('text');

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
