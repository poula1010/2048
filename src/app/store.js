import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import gridReducer from '../features/Grid/gridSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    grid:gridReducer
  },
});
