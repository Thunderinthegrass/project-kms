import { configureStore } from "@reduxjs/toolkit";
import { dialogsReduser } from "./dialogsSlice";
import { authReducer } from "./authSlice";
import { profileReducer } from "./profileSlice";

export const store = configureStore({
  reducer: {
    dialogs: dialogsReduser,
    auth: authReducer,
    profile: profileReducer
  }
})