import React from "react";
import s from "./ProfileInfo.module.css";
import leopold from "../../../assets/leopold.jpg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusClass from "./ProfileStatus/ProfileStatusClass";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatustrenirovka from "./ProfileStatus/ProfileStatustrenirovka";

const ProfileInfo = (props) => {
  // debugger
  // if (!props.userData) {
  //   return <Preloader />;
  // }
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
          {/* <p>{props.userData.fullName}</p> */}
          {/* <ProfileStatusClass status={props.status} updateStatus={props.updateStatus} /> */}
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          {/* <ProfileStatustrenirovka status={props.status} updateStatus={props.updateStatus} /> */}
        </div>
      </div>
  )
}

export default ProfileInfo;