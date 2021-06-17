import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { MainRouter } from '../core/routes/MainRouter';
import { CreateUser } from '../pages/CreateUser/CreateUser';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { Login } from '../pages/Login/Login';

export const AppRouter = () => (
  <>
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={Login} />
        <Route path='/create-user' component={CreateUser} />
        <Route exact path='/home' component={MainRouter} />
      </Switch>
    </Router>
  </>
);
