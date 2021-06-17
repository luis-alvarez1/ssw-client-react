import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator';
import { JWT_TOKEN_KEY } from '../../core/constants';
import { getItem } from '../../utils/helpers/LocalStorage';

export const LandingPage = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const token = getItem(JWT_TOKEN_KEY);
    // verifies whether there's not user or there's an user and it's not an empty object
    if (
      !token ||
      (token &&
        Object.keys(token).length === 0 &&
        token.constructor === Object)
    ) {
      setLoading(false);
      props.history.push('/login');
    } else if (token) {
      setLoading(false);
      // User's logged in
      props.history.push('/home');
    }
  }, []);

  return (
    <>
      <Box style={{ height: window.innerHeight }}>
        {loading && <LoadingIndicator />}
      </Box>
    </>
  );
};
