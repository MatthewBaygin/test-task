import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: Date(),
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    tick: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = Date();
    }
  },
});

export const { tick } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;


export default counterSlice.reducer;
