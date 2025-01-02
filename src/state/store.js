import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/courseSlice";

export const store = configureStore({
  reducer: {
    course: courseReducer,
  }
});
