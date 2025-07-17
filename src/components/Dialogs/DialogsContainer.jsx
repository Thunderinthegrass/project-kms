import React from "react";
import { addMessageActionCreator, addNewMessageTextActionCreator } from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let addNewMessageText = (text) => {
            store.dispatch(addNewMessageTextActionCreator(text));
          }

          const addMessage = () => {
            store.dispatch(addMessageActionCreator());
          }
          return <Dialogs dialogsPage={store.getState().dialogsPage} addNewMessageText={addNewMessageText} addMessage={addMessage} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;