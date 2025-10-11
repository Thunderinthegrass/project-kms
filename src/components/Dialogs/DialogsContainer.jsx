// import React from "react";
import { addMessageActionCreator, addNewMessageTextActionCreator } from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // addNewMessageText: (text) => {
    //   dispatch(addNewMessageTextActionCreator(text))
    // },
    addMessage: (message) => {
      dispatch(addMessageActionCreator(message))
    },
  }
}

// const authRedirectComponent = withAuthRedirect(Dialogs);//withAuthRedirect находится в hoc/withAuthRedirect, это контейнерный компонент

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

// export default DialogsContainer;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);