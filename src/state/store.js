import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/courseSlice";
import userAuthApi from "./userApis/userAuthApis";
import userSlice from "./slices/useSlice";
import admissionApis from "./userApis/admissionApis";
export const store = configureStore({
  reducer: {
    course: courseReducer,
    user: userSlice,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [admissionApis.reducerPath]: admissionApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userAuthApi.middleware)
      .concat(admissionApis.middleware),
});

export default store;
