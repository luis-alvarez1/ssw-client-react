import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { MainPage } from '../../pages/MainPage/MainPage';

export const MainRouter = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
      </Switch>
    </>
  );
};
