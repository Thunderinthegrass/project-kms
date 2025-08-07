const ADD_USERS = "ADD-USERS";
const SET_USERS = "SET-USERS";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

const ON_CHANGE_QUANTITY_ON_PAGE = "ON_CHANGE_QUANTITY_ON_PAGE";

const ON_IS_FETCHING = "ON_IS_FETCHING";

export const addUsersAC = () => ({type: ADD_USERS});

export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const onChangeQuantityOnPage = (pageSize) => ({type: ON_CHANGE_QUANTITY_ON_PAGE, pageSize});
export const onIsFetching = (isFetching) => ({type: ON_IS_FETCHING, isFetching});

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
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
      // return {...state, users: [...state.users, ...action.users]}
      return {...state, users: [...action.users]};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalCount};
    case ON_CHANGE_QUANTITY_ON_PAGE:
      return {...state, pageSize: action.pageSize};
    case ON_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    default:
      return state;
  }
};

export default usersReducer;
