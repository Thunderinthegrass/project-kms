import React from "react";
import s from "./User.module.css";

const User = (props) => {
  return (
    <div className={s.user}>
      <div className={s.userImgWrapper}>
        <img src="" alt="" className={s.userImg} />
      </div>
      <div className={s.userInfo}>
        <span className={s.userName}>{props.name}</span>
        <span className={s.userAge}></span>
        <span className={s.userLocation}></span>
      </div>
    </div>
  )
}

export default User;
