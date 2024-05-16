import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice/courseSlice";
export const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});
