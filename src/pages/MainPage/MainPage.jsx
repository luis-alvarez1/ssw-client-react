import { Box } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { CarList } from '../../components/Car/CarList';

export const MainPage = () => {
  const vehicles = useSelector(
    (state) => state.vehicles.value,
  );
  if (vehicles) {
    return (
      <Box>
        <CarList vehicles={vehicles} />
      </Box>
    );
  }
};
