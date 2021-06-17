import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    removeUser: (state) => {
      state.value = {};
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
