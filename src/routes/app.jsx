import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import AppHeader from '../components/Header';
import Repositories from './repositories';
import Contributors from './contributors';

const App = () => (
  <div>
    <AppHeader />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Repositories} />
        <Route exact path="/contributors/:repoId" component={Contributors} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
