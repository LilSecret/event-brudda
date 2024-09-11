import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TPActivePage =
  | "publicInfo"
  | "account"
  | "security"
  | "interests"
  | "hosted"
  | "upcoming";

type TProfilePage = {
  activePage: TPActivePage;
};

const initialState: TProfilePage = {
  activePage: "publicInfo",
};

export const profilePageSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeActivePage: (state, action: PayloadAction<TPActivePage>) => {
      state.activePage = action.payload;
    },
  },
});

export const profileSActions = profilePageSlice.actions;

export default profilePageSlice.reducer;
