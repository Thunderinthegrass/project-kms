import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {
  return (
    <div>
      <div className={s.banner}>
        <img
          className={s.bannerImg}
          src="https://zastavok.net/main/priroda/163639060018.jpg"
          alt=""
        />
      </div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText} addNewPostText={props.addNewPostText} />
      Main content
    </div>
  );
};

export default Profile;
