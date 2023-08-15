import { configureStore } from "@reduxjs/toolkit";
import GlobalReducer from "./state";

export const store = configureStore({
  reducer: {
    global: GlobalReducer,
  },
});
