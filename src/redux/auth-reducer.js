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

export const userData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, login, email, isAuth}});

export default authReducer;