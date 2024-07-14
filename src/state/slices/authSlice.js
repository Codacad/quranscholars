import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const storedUser = JSON.parse(localStorage.getItem("user"));
const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: Cookies.get("authToken") ? true : null,
    user: storedUser ? storedUser : null,
    loading: true,
  },
  reducers: {
    register: (state, action) => {
      state.auth = true;
      state.loading = false;
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { register, setLoading } = authSlice.actions;
export default authSlice.reducer;
