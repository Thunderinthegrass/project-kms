import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  
  return (
    <div className={`${s.item} ${s.post}`}>{props.name}</div>
  )
}

export default Post;