import { Route, Switch } from 'react-router-dom';

import Layout from './Layout/Layout';
import Comp from './Comp';
import Counter from './Counter';
import CounterReducer from './CounterReducer';
import Clock from './Clock';
import Color from './Color';
import Task from './Task';
import Friends from './Friends';
import Navigation from './Navigation/Navigation';
import AppBar from './AppBar';
import NotFoundView from '../views/NotFoundView';
import FriendCard from './FriendCard';
import TableView from '../views/TableView';
import BasicTable from './TableFriends/BasicTable';

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
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Comp />
          <Task />
        </Route>
        <Route path="/color">
          <Color options={options} />
        </Route>
        <Route path="/counters">
          <Counter />
          <CounterReducer />
        </Route>
        <Route path="/clock">
          <Clock />
        </Route>
        <Route path="/phone-book" exact>
          <Friends />
        </Route>
        <Route path="/phone-book/:friend">
          <FriendCard />
        </Route>
        <Route path="/router">
          <AppBar />
        </Route>
        <Route path="/table">
          <TableView />
        </Route>

        <Route path="/table-fiends">
          <BasicTable />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
