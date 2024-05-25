import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    AccessToken: "",
  },
  reducers: {
    setAuth: (state, action) => {
      state.AccessToken = action.payload.AccessToken;
    },
    logout: (state) => {
      state.AccessToken = "";
    },
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
