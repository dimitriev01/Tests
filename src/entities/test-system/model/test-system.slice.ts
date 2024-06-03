import { createSlice } from '@reduxjs/toolkit';
import { ITestSystemState } from './test-system.types';

const initialState: ITestSystemState = {
  data: [],
};

export const testSystemSlice = createSlice({
  name: 'testSystemSlice',
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateForm } = testSystemSlice.actions;

export default testSystemSlice.reducer;
