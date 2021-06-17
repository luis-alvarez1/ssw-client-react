import { createSlice } from '@reduxjs/toolkit';

export const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState: {
    value: [],
  },
  reducers: {
    setVehicles: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setVehicles } = vehicleSlice.actions;

export default vehicleSlice.reducer;
