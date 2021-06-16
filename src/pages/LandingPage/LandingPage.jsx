/* eslint-disable no-debugger */
import {
  CircularProgress,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { JWT_TOKEN_KEY } from '../../core/constants';
import { getItem } from '../../utils/helpers/LocalStorage';
import { useLandingPageStyles } from './LandingPageStyles';

export const LandingPage = (props) => {
  const [loading, setLoading] = useState(true);
  const classes = useLandingPageStyles();

  useEffect(() => {
    const token = getItem(JWT_TOKEN_KEY);
    // verifies whether there's not user or there's an user and it's not an empty object
    if (
      !token ||
      (token &&
        Object.keys(token).length === 0 &&
        token.constructor === Object)
    ) {
      props.history.push('/login');
    } else if (token) {
      // User's logged in
      props.history.push('/home');
    }
  }, []);

  return (
    <>
      {loading && (
        <div className={classes.root}>
          <CircularProgress />
          <Typography
            variant='h6'
            style={{ marginTop: '10px' }}
          >
            Loading...
          </Typography>
        </div>
      )}
    </>
  );
};
