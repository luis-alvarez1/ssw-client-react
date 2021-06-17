import { createSlice } from '@reduxjs/toolkit';

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    open: false,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = dialogSlice.actions;

export default dialogSlice.reducer;
