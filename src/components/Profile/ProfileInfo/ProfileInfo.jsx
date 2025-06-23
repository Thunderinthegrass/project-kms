import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.user}>
        <div className={s.userImgWrapper}>
          <img
          src="https://i.ytimg.com/vi/yY8Dl9fYruE/maxresdefault.jpg"
          alt=""
          className={s.userImg}
        />
        </div>
        <div className={s.userName}>
          Кот Леопольд
        </div>
      </div>
  )
}

export default ProfileInfo;