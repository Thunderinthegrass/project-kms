import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "ADD-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

export const addNewPostText = (text) => ({type: ADD_NEW_POST_TEXT, text: text});
export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (data) => ({type: SET_USER_PROFILE, data});

export const setStatus = (data) => ({type: SET_STATUS, data});

let initialState = {
      posts: [
        { id: 1, message: "Пост", likes: 15 },
        { id: 2, message: "Пост", likes: 17 },
        { id: 3, message: "Пост", likes: 12 },
        { id: 4, message: "Пост", likes: 20 },
      ],
      newPostText: "",
      userData: null,//можно в качестве начального значения сделать null, тогда в эту переменную будет приходить объект, и можно будет его не копировать, а можно и пустой объект
      status: ''
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
      return {
        ...state,
        posts: [...state.posts, newPost],// ✅ Новый массив
        newPostText: ""// ✅ Сброс текста
      }
    case SET_USER_PROFILE:
      // console.log(state);
      return  {
        ...state, userData: {...action.data}
      }
    case SET_STATUS:
      return {
        ...state, status: action.data
      }
    default: return state;
  }
};

// export const getUserProfileThunkCreator = (userId = 1049) => {//если id не передается, то он равен 32562
export const getUserProfileThunkCreator = (userId = 32562) => {//если id не передается, то он равен 32562
  return (dispatch) => {
    usersAPI.getUserProfile(userId).then((response) => {//если передается, то отправляем запрос и отрисовываем нужного пользователя
  
          dispatch(setUserProfile(response.data));
        })
  }
}

export const updateStatusThunkCreator = (status = 'Привет') => {
  return (dispatch) => {
    usersAPI.updateStatus(status).then((response) => {
      // console.log("updateResponse:", response)
      dispatch(setStatus(status))
    })
  }
}

export const getStatusThunkCreator = (userId = 32562) => {
  return (dispatch) => {
    usersAPI.getStatus(userId).then((response) => {
      console.log(response)
      dispatch(setStatus(response.data))
    })
  }
}

export default profileReducer;
