// import React from "react";
import { addMessageActionCreator, addNewMessageTextActionCreator } from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
  
//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let addNewMessageText = (text) => {
//             store.dispatch(addNewMessageTextActionCreator(text));
//           }

//           const addMessage = () => {
//             store.dispatch(addMessageActionCreator());
//           }
//           return <Dialogs dialogsPage={store.getState().dialogsPage} addNewMessageText={addNewMessageText} addMessage={addMessage} />
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewMessageText: (text) => {
      dispatch(addNewMessageTextActionCreator(text))
    },
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;