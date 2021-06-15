/* eslint-disable react/prop-types */
import { CircularProgress, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { USER_KEY } from '../../core/constants';
import { getItem } from '../../utils/helpers/LocalStorage';
import { useLandingPageStyles } from './LandingPageStyles';

export const LandingPage = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const classes = useLandingPageStyles();

  const getTokenFromLocalStorage = async () => {
    setLoading(true);
    await setUser(getItem(USER_KEY));
    setLoading(false);
  };
  useEffect(() => {
    getTokenFromLocalStorage();
    // verifies whether there's not user or there's an user and it's not an empty object
    if (
      !user ||
      (user && Object.keys(user).length === 0 && user.constructor === Object)
    ) {
      props.history.push('/login');
    } else if (user) {
      // User's logged in
      props.history.push('/home');
    }
  }, []);

  return (
    <>
      {loading && (
        <div className={classes.root}>
          <CircularProgress />
          <Typography variant='h6' style={{ marginTop: '10px' }}>
            Loading...
          </Typography>
        </div>
      )}
    </>
  );
};
