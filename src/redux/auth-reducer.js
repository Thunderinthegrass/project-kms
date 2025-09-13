import { usersAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: 1,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }
    default: return state;
  }
}

export const userData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, data: {userId, login, email, isAuth}});

export const userDataThunkCreator = () => {
  return (dispatch) => {
    usersAPI.getUserData().then(response => {
      const data = response;
      dispatch(userData(data.data.id, data.data.login, data.data.email, data.resultCode))//resultCode находится в объекте ответа, остальные данные находятся в объекте data, вложенном в объект ответа
    });
  }
}

export default authReducer;