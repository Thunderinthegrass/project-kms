import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dialogs: [
    { id: 1, name: "Александр Петров" },
    { id: 2, name: "Федор Пнев" },
    { id: 3, name: "Охотник Селиван" },
    { id: 4, name: "Дед Вовка" },
  ],
  messages: [
    { id: 1, message: "На болоте туман" },
    { id: 2, message: "В урочище ясно" },
    { id: 3, message: "Изба стоит" },
  ],
};

const dialogsSlice = createSlice({
  name: "dialogs",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const messageId = state.messages.length + 1;

      const message = {
        id: messageId,
        message: action.payload.message,
      }

      let stateCopy = {...state};

      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(message);

      // console.log(state)
      return stateCopy;
    }
  }
})

export const dialogsReduser = dialogsSlice.reducer;
export const { addMessage } = dialogsSlice.actions;
