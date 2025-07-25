const ADD_USERS = "ADD-USERS";

const SET_USERS = "SET-USERS";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

export const addUsersAC = () => ({type: ADD_USERS});

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      console.log(state);
      return state;
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user;
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        }),
      }
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]}
    default:
      return state;
  }
};

export default usersReducer;
