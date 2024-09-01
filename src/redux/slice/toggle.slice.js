import { createSlice } from "@reduxjs/toolkit";

export const ToggleSlice = createSlice({
  name: "toggle",
  initialState: {
    menuToggle: false,
  },
  reducers: {
    openMenuToggle: (state) => {
      state.menuToggle = !state.menuToggle;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openMenuToggle } = ToggleSlice.actions;

export default ToggleSlice.reducer;
