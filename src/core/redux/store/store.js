import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from '../reducers/vehicle-reducers/vehicleReducers';
import profileDialogReducer from '../reducers/profile-dialog/profileDialog';
import userReducer from '../reducers/user/user';
import creditReducer from '../reducers/credits/credits';

export const store = configureStore({
  reducer: {
    vehicles: vehicleReducer,
    profileDialog: profileDialogReducer,
    user: userReducer,
    credits: creditReducer,
  },
});
