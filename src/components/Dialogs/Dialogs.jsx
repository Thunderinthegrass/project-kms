import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogs = props.dialogsData.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messages = props.dialogsData.messages.map(message => <Message message={message.message} />)
  
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        { dialogs }
      </div>
      <div className={s.messages}>
        { messages }
      </div>
    </div>
  )
}

export default Dialogs;