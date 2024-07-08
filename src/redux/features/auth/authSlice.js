import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    AccessToken: "",
    PersonID: "",
  },
  reducers: {
    setAuth: (state, action) => {
      state.AccessToken = action.payload.AccessToken;
      state.PersonID = action.payload.PersonID;
    },
    logout: (state) => {
      state.AccessToken = "";
      state.PersonID = "";

    },
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
