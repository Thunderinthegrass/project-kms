import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      <div className={s.banner}>
        {/* <img className="banner-img" src="https://zastavok.net/main/priroda/1473870210.jpg" alt="" /> */}
        <img
          className={s.bannerImg}
          src="https://zastavok.net/main/priroda/163639060018.jpg"
          alt=""
        />
      </div>
      <div className="user"></div>
      <MyPosts />
      Main content
    </div>
  );
};

export default Profile;
