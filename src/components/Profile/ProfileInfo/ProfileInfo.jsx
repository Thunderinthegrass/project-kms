import React from "react";
import s from "./ProfileInfo.module.css";
import leopold from "../../../assets/leopold.jpg";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  // debugger
  if (!props.userData) {
    return <Preloader />;
  }
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
          {/*<p>{props.userData.aboutMe}</p>*/}
          {/*<p>{props.userData.lookingForAJobDescription}</p>*/}
          <p>{props.userData.fullName}</p>
        </div>
      </div>
  )
}

export default ProfileInfo;