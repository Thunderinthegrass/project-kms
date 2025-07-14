import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
// debugger
  let postsElements = props.posts.map(post => <Post id={ post.id } message={ post.message } likes={ post.likes } />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.newPostChange(text);
  }
  
  return (
    <div className={s.postsWrapper}>
      <div className="new-post">
        <textarea name="" id="" ref={ newPostElement } onChange={ onPostChange } value={ props.newPostText } />
        <button onClick={ onAddPost }>Добавить пост</button>
      </div>
      <div className="posts">
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
