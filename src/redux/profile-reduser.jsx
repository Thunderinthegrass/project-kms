const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "ADD-NEW-POST-TEXT";

export const addNewPostTextActionCreator = (text) => ({type: ADD_NEW_POST_TEXT, text: text});
export const addPostActionCreator = () => ({type: ADD_POST});

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let postId = state.posts.length + 1;
        let newPost = {
          id: postId,
          message: state.newPostText,
          likes: 10
        }
        state.posts.push(newPost);
        state.newPostText = "";
        console.log(state.posts);
        return state;
    case ADD_NEW_POST_TEXT:
      state.newPostText = action.text;
      console.log(state.newPostText)
      return state;
    default: return state;
  }
};

export default profileReducer;
