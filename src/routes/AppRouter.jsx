import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainPage } from '../pages/MainPage/MainPage';

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <MainPage />
      </Route>
    </Switch>
  </Router>
);
