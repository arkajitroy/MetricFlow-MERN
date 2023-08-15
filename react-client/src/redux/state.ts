import { createSlice } from "@reduxjs/toolkit";
import { ThemeContextInitialState } from "../@types/context/themeContext.types";

const initialState: ThemeContextInitialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
};

export const GlobalSlice = createSlice({
  name: "globalTheme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = GlobalSlice.actions;

export default GlobalSlice.reducer;
