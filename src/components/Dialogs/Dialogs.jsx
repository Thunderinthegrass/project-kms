import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        <div className={s.dialog}>
          <NavLink to="/Dialogs/1">Александр</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/Dialogs/2">Федор</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/Dialogs/3">Селиван</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/Dialogs/4">Дед Вовка</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>
          На болоте туман
        </div>
        <div className={s.message}>
          В урочище ясно
        </div>
        <div className={s.message}>
          Изба стоит
        </div>
      </div>
    </div>
  )
}

export default Dialogs;