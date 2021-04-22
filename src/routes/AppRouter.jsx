import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { MainPage } from '../pages/MainPage/MainPage';

export const AppRouter = () => (
  <>
    <Header />
    <Router>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
      </Switch>
    </Router>
  </>
);
