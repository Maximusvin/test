import { useState } from 'react';
import './App.css';

const Comp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className="colorBox">
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Comp;
