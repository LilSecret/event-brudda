import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_USERS } from "../../API";
import { TUser } from "../../types";
import toast from "react-hot-toast";

interface AuthState {
  user: TUser | undefined;
  isSubscribed: boolean;
}

const initialState: AuthState = {
  user: undefined,
  isSubscribed: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
    subscribe: (state) => {
      state.isSubscribed = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
