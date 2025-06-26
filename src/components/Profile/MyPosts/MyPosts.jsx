import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} likes={post.likes} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text, props.rerenderEntireTree);
  }

  return (
    <div className={s.postsWrapper}>
      <div className="new-post">
        <textarea name="" id="" ref={newPostElement}>

        </textarea>
        <button onClick={ addPost }>Добавить пост</button>
      </div>
      <div className="posts">
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
