import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../../types";

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
      if (action.payload.isSubscribed) {
        state.isSubscribed = true;
      }
      state.user = action.payload;
    },
    subscribe: (state) => {
      state.isSubscribed = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
