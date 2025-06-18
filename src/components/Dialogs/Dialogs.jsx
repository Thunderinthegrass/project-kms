import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        <div className={s.dialog}>
          Александр
        </div>
        <div className={s.dialog}>
          Федор
        </div>
        <div className={s.dialog}>
          Селиван
        </div>
        <div className={s.dialog}>
          Дед Вовка
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