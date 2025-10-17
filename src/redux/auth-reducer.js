import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';

const initialState = {
  userId: null,
  login: null,
  email: null,
  // isAuth: 1,
  isAuth: 1,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      console.log(initialState.isAuth);
      return {
        ...state,
        ...action.data,
        // isAuth: true//из-за этого тоже были проблемы
      }
    default: return state;
  }
}

 const userData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, data: {userId, login, email, isAuth}});

 const loginData = (userId) => ({type: SET_LOGIN_DATA, userId})



// export const userDataThunkCreator = () => {
//   return (dispatch) => {
//     authAPI.getUserData().then(response => {
//       const data = response.data;
//       dispatch(userData(data.data.id, data.data.login, data.data.email, data.resultCode))//resultCode находится в объекте ответа, остальные данные находятся в объекте data, вложенном в объект ответа
//     });
//   }
// }

export const userDataThunkCreator = () => {
  return (dispatch) => {
    authAPI.getUserData().then(response => {
      if (response.data.resultCode === 0) {
        const data = response.data;
        dispatch(userData(data.data.id, data.data.login, data.data.email, true))//resultCode находится в объекте ответа, остальные данные находятся в объекте data, вложенном в объект ответа
      }
    });
  }
}

export const loginThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
      console.log(response.data)
      if (response.data.resultCode === 0) {
        dispatch(userDataThunkCreator());
      }
    })
  }
}

export const logoutThunkCreator = () => {
  return (dispatch) => {
    authAPI.logout().then(response => {
      console.log(response)
      if (response.data.resultCode === 0) {
        dispatch(userData(null, null, null, false));
      }
    })
  }
}

export default authReducer;