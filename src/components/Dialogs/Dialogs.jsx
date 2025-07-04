import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogs = props.dialogsData.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messages = props.dialogsData.messages.map(message => <Message message={message.message} />)

  const newMessageText = React.createRef();

  const updateMessageText = () => {
    console.log('ggg');
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
          <textarea name="" id="" placeholder="Введите ваше сообщение" ref={newMessageText} onChange={updateMessageText} value={props.dialogsData.newMessageText}>

          </textarea>
          <button className={s.btn}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;