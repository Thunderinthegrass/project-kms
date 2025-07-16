import React from "react";
import { addMessageActionCreator, addNewMessageTextActionCreator } from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let addNewMessageText = (text) => {
    props.store.dispatch(addNewMessageTextActionCreator(text));
  }

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }
  
  return (
    <Dialogs dialogsPage={props.store.getState().dialogsPage} addNewMessageText={addNewMessageText} addMessage={addMessage} />
  )
}

export default DialogsContainer;