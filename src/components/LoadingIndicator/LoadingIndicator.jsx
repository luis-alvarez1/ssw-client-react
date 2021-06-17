import {
  CircularProgress,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useLoadingIndicatorStyles } from './LoadingIndicatorStyles';

export const LoadingIndicator = () => {
  const classes = useLoadingIndicatorStyles();
  return (
    <div className={classes.root}>
      <CircularProgress />
      <Typography
        variant='h6'
        style={{ marginTop: '10px' }}
      >
        Loading...
      </Typography>
    </div>
  );
};
