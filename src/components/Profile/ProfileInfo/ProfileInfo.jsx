import React from "react";
import s from "./ProfileInfo.module.css";
import leopold from "../../../assets/leopold.jpg";

const ProfileInfo = (props) => {
  // debugger
  return (
    <div className={s.user}>
        <div className={s.userImgWrapper}>
          <img
          src={leopold}
          alt=""
          className={s.userImg}
        />
        </div>
        <div className={s.userName}>
          Кот Леопольд
          <p>{props.aboutUser}</p>
        </div>
      </div>
  )
}

export default ProfileInfo;