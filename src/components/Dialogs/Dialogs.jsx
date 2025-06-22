import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/Dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>
      {props.message}
    </div>
  )
}

const Dialogs = () => {

  const dialogsData = [
    {id: 1, name: "Александр"},
    {id: 2, name: "Федор"},
    {id: 3, name: "Селиван"},
    {id: 4, name: "Дед Вовка"},
  ]

  const messagesData = [
    {id: 1, message: "На болоте туман"},
    {id: 2, message: "В урочище ясно"},
    {id: 3, message: "Изба стоит"},
  ]

  let dialogs = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messages = messagesData.map(message => <Message message={message.message} />)
  
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