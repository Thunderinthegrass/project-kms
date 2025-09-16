// import React from "react";
import { addMessageActionCreator, addNewMessageTextActionCreator } from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
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