import { gql, useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarList } from '../../components/Car/CarList';
import { setVehicles } from '../../core/redux/reducers/vehicle-reducers/vehicleReducers';

export const MainPage = () => {
  const dispatch = useDispatch();

  const VEHICLES = gql`
    query vehicles {
      vehicles {
        name
        model
        year
        colour
        price
        cylinderCapacity
        gearbox
        stock
        imgUrl
      }
    }
  `;

  useQuery(VEHICLES, {
    onCompleted: ({ vehicles: vehiclesResp }) => {
      dispatch(setVehicles(vehiclesResp));
    },
  });

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
