import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import banner1 from "../../assets/banner/banner-1.jpg";
import banner2 from "../../assets/banner/banner-2.jpeg";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  // debugger
  // alert(props.isAuth)
  return (
    <div>
      <div className={s.banner}>
        <img
          className={s.bannerImg}
          src={banner1}
          alt=""
        />
        <img
          className={s.bannerImg}
          src={banner2}
          alt=""
        />
      </div>
      <ProfileInfo userData={props.userData} status={props.status} updateStatus={props.updateStatusThunkCreator} />
      <MyPosts posts={ props.posts }
               addPost={props.addPost} />
      Main content
    </div>
  );
};

export default Profile;
