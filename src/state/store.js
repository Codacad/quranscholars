import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/courseSlice";
import userAuthApi from "./userApis/userAuthApis";
import userSlice from "./slices/userSlice";
import admissionApis from "./userApis/admissionApis";
import fileUploadApi from "./userApis/fileUploadApis";
import paymentApi from "./userApis/paymentApi";
export const store = configureStore({
  reducer: {
    course: courseReducer,
    user: userSlice,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [admissionApis.reducerPath]: admissionApis.reducer,
    [fileUploadApi.reducerPath]: fileUploadApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userAuthApi.middleware)
      .concat(admissionApis.middleware)
      .concat(fileUploadApi.middleware).concat(paymentApi.middleware),
});

export default store;
