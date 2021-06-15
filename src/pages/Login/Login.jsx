import { Box, TextField } from '@material-ui/core';
import React from 'react';
import { useLoginStyles } from './LoginStyles';

export const Login = () => {
  const classes = useLoginStyles();

  return (
    <>
      <Box className={classes.container}>
        <TextField id='outlined' label='User Email' variant='outlined' />
        <TextField
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
          variant='outlined'
        />
      </Box>
    </>
  );
};
