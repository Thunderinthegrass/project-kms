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
        // isAuth: true
        isAuth: action.data.isAuth//вместо фиксированного значения сюда приходит 0 или 1 с сервера. Если 0, то залогинен, если 1, то нет
      }
    case SET_LOGIN_DATA:
      return {
        ...state,
        userId: action.userId
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
        console.log(response.data.resultCode)
        dispatch(userData(data.data.id, data.data.login, data.data.email, data.resultCode))//resultCode находится в объекте ответа, остальные данные находятся в объекте data, вложенном в объект ответа
      }
    });
  }
}

// export const loginThunkCreator = (email, password, rememberMe) => {
//     authAPI.login(email, password, rememberMe).then(response => {
//       console.log(response)
//     })
// }

export const loginThunkCreator = (email, password, rememberMe) => {
    authAPI.login(email, password, rememberMe).then(response => {
      console.log(response)
      return (dispatch) => {
        if (response.data.resultCode === 0) {
          const data = response.data;
          console.log(response.data.resultCode)
          dispatch(userData(data.data.id, data.data.login, data.data.email, data.resultCode))//resultCode находится в объекте ответа, остальные данные находятся в объекте data, вложенном в объект ответа
        }
      }
    })
}

export const logoutThunkCreator = () => {
  authAPI.logout().then(response => {
    console.log(response);
  })
  console.log(initialState)
}

export default authReducer;