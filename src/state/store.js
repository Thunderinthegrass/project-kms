import { configureStore } from "@reduxjs/toolkit";
import { dialogsReduser } from "./dialogsSlice";

export const store = configureStore({
  reducer: {
    dialogs: dialogsReduser
  }
})