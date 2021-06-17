import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from '../reducers/vehicle-reducers/vehicleReducers';
import dialogReducer from '../reducers/dialog/dialog';
import userReducer from '../reducers/user/user';
import creditReducer from '../reducers/credits/credits';

export const store = configureStore({
  reducer: {
    vehicles: vehicleReducer,
    dialog: dialogReducer,
    user: userReducer,
    credits: creditReducer,
  },
});
