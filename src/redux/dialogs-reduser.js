const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT";

export const addNewMessageTextActionCreator = (text) => ({type: ADD_NEW_MESSAGE_TEXT, text: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

let initialState = {
      dialogs: [
        { id: 1, name: "Александр" },
        { id: 2, name: "Федор" },
        { id: 3, name: "Селиван" },
        { id: 4, name: "Дед Вовка" },
      ],
      messages: [
        { id: 1, message: "На болоте туман" },
        { id: 2, message: "В урочище ясно" },
        { id: 3, message: "Изба стоит" },
      ],
      newMessageText: "",
    };

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;

      return {...state};
    case ADD_MESSAGE:
      const messageId = state.messages.length + 1;

      const message = {
        id: messageId,
        message: state.newMessageText,
      }

      let stateCopy = {...state};

      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(message);

      stateCopy.newMessageText = "";

      console.log(state)
      return stateCopy;
    default: return state;
  }
}

export default dialogsReduser;