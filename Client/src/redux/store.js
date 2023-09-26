import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./loginRedux";
import getDataReducer from "./userRedux";

export const store = configureStore({
    reducer: {
      userValue: userReducer,
      dataFetched: getDataReducer,
    },
  })