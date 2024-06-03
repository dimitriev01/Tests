import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { testSystemSlice } from 'entities/test-system';

const rootReducer = combineReducers({
  testSystemReducer: testSystemSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
