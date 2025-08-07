const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "ADD-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export const addNewPostText = (text) => ({type: ADD_NEW_POST_TEXT, text: text});
export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (data) => ({type: SET_USER_PROFILE, data});

let initialState = {
      posts: [
        { id: 1, message: "Пост", likes: 15 },
        { id: 2, message: "Пост", likes: 17 },
        { id: 3, message: "Пост", likes: 12 },
        { id: 4, message: "Пост", likes: 20 },
      ],
      newPostText: "",
      aboutUser: "",
    }

const profileReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case ADD_NEW_POST_TEXT:
      console.log("ADD_POST_TEXT");
      return {// Создаем новый объект состояния
        ...state,
        newPostText: action.text
      }
    case ADD_POST:
      const postId = state.posts.length + 1;

        const newPost = {
          id: postId,
          message: state.newPostText,
          likes: 10
        }
    case SET_USER_PROFILE:
      console.log(state.userProfile);
      return {
        ...state, aboutUser: action.data
      }
        return {
          ...state,
          posts: [...state.posts, newPost],// ✅ Новый массив
          newPostText: ""// ✅ Сброс текста
        }
      default: return state;
  }
};

export default profileReducer;
