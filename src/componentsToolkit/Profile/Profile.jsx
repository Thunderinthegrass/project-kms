import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import banner1 from "../../assets/banner/banner-1.jpg";
import banner2 from "../../assets/banner/banner-2.jpeg";
import MyPosts from "./MyPosts/MyPosts";
import { useSelector } from "react-redux";
import { authAPI } from "../../api/api";

const Profile = (props) => {
  // debugger
  // alert(props.isAuth)

  const profileData = useSelector((state) => state.profile)

  console.log(profileData)

  authAPI.getUserData().then(response => {
    const data = response.data;
    console.log(data)
  })

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
      <MyPosts posts={ profileData.posts }
               addPost={props.addPost} />
      Main content
    </div>
  );
};

export default Profile;
