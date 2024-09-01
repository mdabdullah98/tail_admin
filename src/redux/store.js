import { configureStore } from "@reduxjs/toolkit";
import ToggleReducer from "./slice/toggle.slice";

export default configureStore({
  reducer: {
    toggle: ToggleReducer,
  },
});
