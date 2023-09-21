import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./loginRedux";

export const store = configureStore({
    reducer: {
      userValue: userReducer,
    },
  })