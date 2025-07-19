const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "ADD-NEW-POST-TEXT";

export const addNewPostTextActionCreator = (text) => ({type: ADD_NEW_POST_TEXT, text: text});
export const addPostActionCreator = () => ({type: ADD_POST});

let initialState = {
      posts: [
        { id: 1, message: "Пост", likes: 15 },
        { id: 2, message: "Пост", likes: 17 },
        { id: 3, message: "Пост", likes: 12 },
        { id: 4, message: "Пост", likes: 20 },
      ],
      newPostText: "",
    }

const profileReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case ADD_NEW_POST_TEXT:
      state.newPostText = action.text;
      return {...state};

      // return {
      //   ...state,
      //   newPostText: action.text, // Создаем новый объект состояния
      // };
    case ADD_POST:
      const postId = state.posts.length + 1;

        const newPost = {
          id: postId,
          message: state.newPostText,
          likes: 10
        }

        let stateCopy = {...state};
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        
        stateCopy.newPostText = "";

        return stateCopy;

        // return {
      //   ...state,
      //   posts: [...state.posts, newPost], // ✅ Новый массив
      //   newPostText: "" // ✅ Сброс текста
      // };
      default: return state;
  }
};

export default profileReducer;
