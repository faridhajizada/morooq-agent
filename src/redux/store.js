import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { autApi } from "../api/authApi";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [autApi.reducerPath]: autApi.reducer,
    auth: authReducer, 
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([autApi.middleware]),
});

setupListeners(store.dispatch);

