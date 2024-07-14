import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/courseSlice";
import authApi from "./userApis/authApis";
import authReducer from "./slices/authSlice";
export const store = configureStore({
  reducer: {
    course: courseReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(authApi.middleware),
});
