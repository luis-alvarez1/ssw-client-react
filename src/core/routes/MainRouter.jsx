import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Credits } from '../../pages/Credits/Credits';
import { MainPage } from '../../pages/MainPage/MainPage';
import { getUserFromLocalStorage } from '../../utils/helpers/JWT';
import { CREDITS, VEHICLES } from '../constants';
import { setCredits } from '../redux/reducers/credits/credits';
import { setUser } from '../redux/reducers/user/user';
import { setVehicles } from '../redux/reducers/vehicle-reducers/vehicleReducers';

export const MainRouter = () => {
  const dispatch = useDispatch();

  const setUserState = () => {
    const user = getUserFromLocalStorage();
    dispatch(setUser(user));
  };

  useQuery(VEHICLES, {
    onCompleted: ({ vehicles }) => {
      dispatch(setVehicles(vehicles));
    },
  });

  const user = useSelector((state) => state.user.value);
  useQuery(CREDITS, {
    onCompleted: ({ credits }) => {
      dispatch(setCredits(credits));
    },
    variables: {
      filter: {
        userId: user._id,
      },
    },
  });

  useEffect(() => {
    setUserState();
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route path='/' component={MainPage} />
        {/* TODO: FIX ROUTE */}
        <Route path='/user-credits' component={Credits} />
      </Switch>
    </>
  );
};
