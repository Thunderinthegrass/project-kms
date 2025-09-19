import React from "react";
import s from "./ProfileInfo.module.css";
import leopold from "../../../assets/leopold.jpg";
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusClass from "./ProfileStatus/ProfileStatusClass";

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
          {/* Кот Леопольд */}
          {/*<p>{props.userData.aboutMe}</p>*/}
          {/*<p>{props.userData.lookingForAJobDescription}</p>*/}
          <p>{props.userData.fullName}</p>
          {/* <ProfileStatus status={"Ребята, давайте жить дружно"} /> */}
          <ProfileStatusClass status={"Ребята, давайте жить дружно"} />
        </div>
      </div>
  )
}

export default ProfileInfo;