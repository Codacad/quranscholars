import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/courseSlice";
import userAuthApi from "./userApis/userAuthApis";
import userSlice from "./slices/useSlice";
export const store = configureStore({
  reducer: {
    course: courseReducer,
    user: userSlice,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
});

export default store;
