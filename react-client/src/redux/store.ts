import { configureStore } from "@reduxjs/toolkit";
import GlobalReducer from "./state";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    global: GlobalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
