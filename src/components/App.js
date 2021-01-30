import Layout from './Layout/Layout';
import Comp from './Comp';
import Counter from './Counter';
import CounterReducer from './CounterReducer';
import Clock from './Clock';
import Color from './Color';
import Task from './Task';
import Friends from './Friends';

import './App.css';

const options = [
  { label: 'red', color: 'red' },
  { label: 'blue', color: 'blue' },
  { label: 'black', color: 'black' },
  { label: 'yellow', color: 'yellow' },
  { label: 'green', color: 'green' },
];

function App() {
  return (
    <Layout>
      <h1>Home Work #2.2</h1>
      <Comp />
      <Color options={options} />
      <Counter />
      <CounterReducer />
      <Task />
      <Clock />
      <Friends />
    </Layout>
  );
}

export default App;