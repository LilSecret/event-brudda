import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_USERS } from "../../API";
import { TUser } from "../../types";
import toast from "react-hot-toast";

interface AuthState {
  user: TUser | undefined;
}

const initialState: AuthState = {
  user: undefined,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state: AuthState,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      API_USERS.getAllUsers().then((users) => {
        const { username, password } = action.payload;
        const user = users.find((user: TUser) => user.username === username);
        const doesPasswordMatch = user?.password === password;

        if (!user) {
          toast.error("That user doesn't exist");
          return;
        }
        if (!doesPasswordMatch) {
          toast.error("Password does not match");
          return;
        }
        toast.success("Login Success 😃");
        localStorage.setItem("user", JSON.stringify(user));
        state.user = user;
        // window.location.replace("http://localhost:5173");
      });
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
