import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogs = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messages = props.dialogsPage.messages.map(message => <Message message={message.message} />)

  let newMessage = React.createRef();

  let addMessage = () => {
    let text = newMessage.current.value;
    console.log(text)
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
          <textarea name="" id="" placeholder="Введите ваше сообщение" ref={newMessage}>

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