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

  const dialogsData1 = [
    {id: 1, name: "Александр"},
    {id: 2, name: "Федор"},
    {id: 3, name: "Селиван"},
    {id: 4, name: "Дед Вовка"},
  ]

  const dialogsData2 = [
    {id: 1, message: "На болоте туман"},
    {id: 2, message: "В урочище ясно"},
    {id: 3, message: "Изба стоит"},
  ]
  
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        { dialogsData1.map((item) => <DialogItem name={item.name} id={item.id} />) }
      </div>
      <div className={s.messages}>
        {dialogsData2.map((item) => <Message message={item.message} />)}
      </div>
    </div>
  )
}

export default Dialogs;