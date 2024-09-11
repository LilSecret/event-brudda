import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice";
import profilePageReducer from "./Profile/profileSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profilePage: profilePageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
