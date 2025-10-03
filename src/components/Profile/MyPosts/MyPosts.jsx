import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="newPostTextarea"></label>
      <Field placeholder={"добавить пост"} name={"newPost"} component={"textarea"} />
      <button>Добавить пост</button>
    </form>
  )
}

const PostReduxForm = reduxForm({
  form: 'postForm'
}) (PostForm)

const MyPosts = (props) => {
// debugger

  let postsElements = props.posts.map(post => <Post key={post.id} id={ post.id } message={ post.message } likes={ post.likes } />)

  // let newPostElement = React.createRef();

  // let onAddPost = () => {

  //   props.addPost();
  // }
  
  // let addNewPostText = () => {
  //   let text = newPostElement.current.value;
  //   props.addNewPostText(text);
  // }
  

  const onSubmit = (formData) => {
    console.log("postForm:", formData);
    // let text = formData.newPost;
    // props.addNewPostText(text);
    props.addPost(formData.newPost);

    // console.log(props.newPostText)
  }

  return (
    <div className={s.postsWrapper}>
      <div className="new-post">
        <PostReduxForm onSubmit={onSubmit} />
        {/* <textarea name="" id="newPostTextarea" ref={ newPostElement } onChange={ addNewPostText } value={ props.newPostText } />
        <button onClick={ onAddPost }>Добавить пост</button> */}
      </div>
      <div className="posts">
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
