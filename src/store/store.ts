import { configureStore } from "@reduxjs/toolkit";
import reportsReducer from "./reports";

export const store = configureStore({
  reducer: {
    reportsState: reportsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
