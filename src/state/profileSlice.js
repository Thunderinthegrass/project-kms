import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
        { id: 1, message: "Пост", likes: 15 },
        { id: 2, message: "Пост", likes: 17 },
        { id: 3, message: "Пост", likes: 12 },
        { id: 4, message: "Пост", likes: 20 },
      ],
      userData: null,//можно в качестве начального значения сделать null, тогда в эту переменную будет приходить объект, и можно будет его не копировать, а можно и пустой объект
      status: '',
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const postId = state.posts.length + 1;

      const newPost = {
        id: postId,
        message: action.payload,
        likes: 10
      }
      return {
        ...state,
        posts: [...state.posts, newPost],//новый массив
        newPostText: ""//сброс текста
      }
    }
  }
})

export const profileReducer = profileSlice.reducer;
export const { addPost } = profileSlice.actions;