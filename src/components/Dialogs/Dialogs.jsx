import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreator, addNewMessageTextActionCreator } from "../../redux/state";

const Dialogs = (props) => {

  let dialogs = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messages = props.dialogsPage.messages.map(message => <Message message={message.message} />)

  let newMessageText = React.createRef();

  let addNewMessageText = () => {
    let text = newMessageText.current.value;
    props.dispatch(addNewMessageTextActionCreator(text));
  }

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }
  
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        { dialogs }
      </div>
      <div className={s.messages}>
        <div className={s.messagesWrapper}>
           { messages }
        </div>
        <div className={s.textareaWrapper}>
          <textarea name="" id="" placeholder="Введите ваше сообщение" ref={newMessageText} value={props.dialogsPage.newMessageText} onChange={addNewMessageText} >

          </textarea>
          <button className={s.btn} onClick={addMessage}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;