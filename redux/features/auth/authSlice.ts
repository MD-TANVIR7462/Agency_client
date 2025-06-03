import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


type initiatState = {
  user: null | object;
  token: null | string;
};

const initialState: initiatState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});
export const { setUser, logout } = authSlice.actions;
const authReducer = authSlice.reducer
export default authReducer;
export const useCurrentToken = (state:RootState)=>state.auth.token
export const useCurrentUser = (state:RootState)=>state.auth.user