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
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        <DialogItem name="Александр" id="1" />
        <DialogItem name="Федор" id="2" />
        <DialogItem name="Селиван" id="3" />
        <DialogItem name="Дед Вовка" id="4" />
      </div>
      <div className={s.messages}>
        <Message message="На болоте туман" />
        <Message message="В урочище ясно" />
        <Message message="Изба стоит" />
      </div>
    </div>
  )
}

export default Dialogs;