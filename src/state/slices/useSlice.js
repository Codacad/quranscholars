import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  setUser: (state, action) => {
    state.user = action.payload;
    localStorage.setItem("user", action.payload);
  },
});

export const { setIser } = userSlice.actions;
export default userSlice.reducer;
