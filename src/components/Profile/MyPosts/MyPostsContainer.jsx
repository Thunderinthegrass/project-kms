import React from "react";
import { addNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
// debugger
  const newPostChange = (text) => {
    props.store.dispatch(addNewPostTextActionCreator(text));
  }

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const state = props.store.getState();

  return (
    <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} newPostChange={newPostChange} addPost={addPost} />
  );
};

export default MyPostsContainer;
