import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={`${s.item} ${s.post}`}>Пост</div>
  )
}

export default Post;