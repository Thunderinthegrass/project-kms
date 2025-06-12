import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div className="banner">
        {/* <img className="banner-img" src="https://zastavok.net/main/priroda/1473870210.jpg" alt="" /> */}
        <img
          className="banner-img"
          src="https://zastavok.net/main/priroda/163639060018.jpg"
          alt=""
        />
      </div>
      <div className="user"></div>
      <div className="posts-wrapper">
        <div className="new-post"></div>
        <div className="posts">
          <div className="post"></div>
          <div className="post"></div>
        </div>
      </div>
      Main content
    </div>
  );
};

export default Profile;
