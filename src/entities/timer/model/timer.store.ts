import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { defaultTimerValue, localStorageTimerKey } from './timer.constants';
import { ITimerStateProps } from './timer.types';

const initialState: ITimerStateProps = {
  timer: JSON.parse(localStorage.getItem(localStorageTimerKey) ?? defaultTimerValue.toString()),
};

export const timerSlice = createSlice({
  name: 'timerSlice',
  initialState,
  reducers: {
    setTimerValue: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
    },
  },
});

export const { setTimerValue } = timerSlice.actions;

export default timerSlice.reducer;
