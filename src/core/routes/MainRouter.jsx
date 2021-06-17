import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { InfoDialog } from '../../components/Dialog/InfoDialog';
import { Header } from '../../components/Header/Header';
import { MainPage } from '../../pages/MainPage/MainPage';
import { getUserFromLocalStorage } from '../../utils/helpers/JWT';
import { CREDITS, VEHICLES } from '../constants';
import { useUsersManagement } from '../hooks/useProfileManagement';
import { setCredits } from '../redux/reducers/credits/credits';
import { setVehicles } from '../redux/reducers/vehicle-reducers/vehicleReducers';

export const MainRouter = () => {
  const dispatch = useDispatch();

  const { user, setUser } = useUsersManagement();

  const setUserGlobalState = () => {
    const userFromLS = getUserFromLocalStorage();
    setUser(userFromLS);
  };

  useEffect(() => {
    setUserGlobalState();
  }, []);

  useQuery(VEHICLES, {
    onCompleted: ({ vehicles }) => {
      dispatch(setVehicles(vehicles));
    },
  });

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

  return (
    <>
      <Header />
      <InfoDialog />
      <Switch>
        <Route path='/' component={MainPage} />
        {/* <Route path='/user-credits' component={Credits} /> */}
      </Switch>
    </>
  );
};
