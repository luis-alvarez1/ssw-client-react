import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from '../reducers/vehicle-reducers/vehicleReducers';

export const store = configureStore({
  reducer: {
    vehicles: vehicleReducer,
  },
});
