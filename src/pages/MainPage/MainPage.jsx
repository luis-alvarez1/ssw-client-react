import { Box } from '@material-ui/core';
import React from 'react';
import { CarCard } from '../../components/Car/CarCard';

export const MainPage = () => {
  console.log('entró al main');
  const car = {
    _id: '607c60a5708fa10824fce345',
    name: 'Mazda',
    model: '2',
    year: 2021,
    colour: 'red',
    price: 17222,
    cylinderCapacity: '1500',
    gearbox: 1,
    stock: 5,
    imgUrl:
      'https://www.mazda.com.co/globalassets/cars/mazda2-sport-2021/360/prime-mt/red/0024-prime-mt.jpg',
  };
  return (
    <Box>
      <CarCard car={car} />
    </Box>
  );
};
