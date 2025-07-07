const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT";

export const addNewMessageTextActionCreator = (text) => ({type: ADD_NEW_MESSAGE_TEXT, text: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

const dialogsReduser = (state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    case ADD_MESSAGE:
      const messageId = state.messages.length + 1;

      const message = {
        id: messageId,
        message: state.newMessageText,
      }

      state.messages.push(message);
      return state;
    default: return state;
  }
}

export default dialogsReduser;