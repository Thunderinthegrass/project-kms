import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

import { addPostActionCreator } from "../../../redux/state";
import { addNewPostTextActionCreator } from "../../../redux/state";

const MyPosts = (props) => {
// debugger
  let postsElements = props.posts.posts.map(post => <Post id={post.id} message={post.message} likes={post.likes} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  
  let newPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(addNewPostTextActionCreator(text));
  }

  return (
    <div className={s.postsWrapper}>
      <div className="new-post">
        <textarea name="" id="" ref={newPostElement} onChange={newPostChange} value={props.posts.newPostText} />
        <button onClick={ addPost }>Добавить пост</button>
      </div>
      <div className="posts">
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
