import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className="posts-wrapper">
      <div className="new-post">
        <textarea name="" id="">

        </textarea>
        <button>Добавить пост</button>
      </div>
      <div className="posts">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
