import { createSlice } from '@reduxjs/toolkit';

export const profileDialogSlice = createSlice({
  name: 'vehicles',
  initialState: {
    value: false,
  },
  reducers: {
    setOpen: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setOpen } = profileDialogSlice.actions;

export default profileDialogSlice.reducer;
