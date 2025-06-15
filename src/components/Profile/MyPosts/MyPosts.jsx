import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={s.postsWrapper}>
      <div className="new-post">
        <textarea name="" id="">

        </textarea>
        <button>Добавить пост</button>
      </div>
      <div className="posts">
        <Post name="Александр" />
        <Post name="Федор" />
        <Post name="Селиван" />
      </div>
    </div>
  );
};

export default MyPosts;
