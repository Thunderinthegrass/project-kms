// import React from "react";
import { addNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";


// const MyPostsContainer = (props) => {
// // debugger

//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           const newPostChange = (text) => {
//             store.dispatch(addNewPostTextActionCreator(text));
//           }

//           const addPost = () => {
//             store.dispatch(addPostActionCreator());
//           }

//           const state = store.getState();
//           return <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} newPostChange={newPostChange} addPost={addPost} />
//         }
//       }
//   </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newPostChange: (text) => {
      dispatch(addNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch.addPost(addPostActionCreator())
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
