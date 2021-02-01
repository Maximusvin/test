import { Route, useRouteMatch, Switch } from 'react-router-dom';

import Router from './Router/Router';
import Layout from './Layout/Layout';
import About from '../views/About';
import Authors from '../views/Authors';
import Books from '../views/Books';
import NotFoundView from '../views/NotFoundView';

import './App.css';

function AppBar() {
  const { url } = useRouteMatch();

  return (
    <Layout>
      <Router />
      <Switch>
        <Route path={`${url}`} exact>
          <About />
        </Route>
        <Route path={`${url}/authors`}>
          <Authors />
        </Route>
        <Route path={`${url}/books`}>
          <Books />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Layout>
  );
}

export default AppBar;
