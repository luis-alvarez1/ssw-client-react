import { createSlice } from '@reduxjs/toolkit';

export const creditsSlice = createSlice({
  name: 'credits',
  initialState: {
    value: [],
  },
  reducers: {
    setCredits: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCredits } = creditsSlice.actions;

export default creditsSlice.reducer;
