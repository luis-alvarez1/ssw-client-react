import { Box } from '@material-ui/core';
import React from 'react';
import { CarCard } from './CarCard';
import { useCarListStyles } from './useCarCardStyles';

export const CarList = ({ vehicles }) => {
  const classes = useCarListStyles();
  return (
    <Box className={classes.root}>
      {vehicles.map((car) => {
        return <CarCard car={car} key={car.name} />;
      })}
    </Box>
  );
};
