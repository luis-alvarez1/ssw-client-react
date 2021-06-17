import { createSlice } from '@reduxjs/toolkit';

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    value: false,
  },
  reducers: {
    setOpen: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setOpen } = dialogSlice.actions;

export default dialogSlice.reducer;
