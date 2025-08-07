import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
// debugger
  let postsElements = props.posts.map(post => <Post key={post.id} id={ post.id } message={ post.message } likes={ post.likes } />)

  let newPostElement = React.createRef();

  let onAddPost = () => {

    props.addPost();
  }
  
  let addNewPostText = () => {
    let text = newPostElement.current.value;
    props.addNewPostText(text);
  }
  
  return (
    <div className={s.postsWrapper}>
      <div className="new-post">
        <textarea name="" id="" ref={ newPostElement } onChange={ addNewPostText } value={ props.newPostText } />
        <button onClick={ onAddPost }>Добавить пост</button>
      </div>
      <div className="posts">
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
