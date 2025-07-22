const ADD_USERS = "ADD-USERS";

const SET_USERS = "SET-USERS";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

export const addUsersAC = () => ({type: ADD_USERS});

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      name: "Дед Вовка",
      img: "https://avatars.dzeninfra.ru/get-zen_doc/62191/pub_5d46ef138da1ce00af96680b_5d472c4ae6cb9b00ad5bdddb/scale_1200",
      location: {
        country: "Болото",
        locality: "Район бывшего поселка Кретово",
        address: "Здание универмага",
      },
      characteristic: {age: 72},
    },
    {
      id: 2,
      followed: false,
      name: "Охотник Селиван",
      img: "https://avatars.dzeninfra.ru/get-zen_doc/1866101/pub_6503e42bffb3f010e7c18488_6503e889f277c224a7deeed4/scale_1200",
      location: {
        country: "Болото",
        locality: "Лесное урочище Волчья сыть",
        address: "Где ночь застанет",
      },
      characteristic: {age: 48},
    },
    {
      id: 3,
      followed: true,
      name: "Владимир Петров",
      img: "https://avatars.dzeninfra.ru/get-zen_doc/1866101/pub_6503e42bffb3f010e7c18488_6503e889f277c224a7deeed4/scale_1200",
      location: {
        country: "Болото",
        locality: "Заброшенный элеватор",
        address: "Здание семстанции",
      },
      characteristic: {age: 38},
    },
    {
      id: 4,
      followed: false,
      name: "Фёдор Пнёв",
      img: "https://avatars.dzeninfra.ru/get-zen_doc/1866101/pub_6503e42bffb3f010e7c18488_6503e889f277c224a7deeed4/scale_1200",
      location: {
        country: "Болото",
        locality: "Заброшенный элеватор",
        address: "Здание МОБ",
      },
      characteristic: {age: 35},
    },
  ],
};

const usersReduser = (state = initialState, action) => {
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

export default usersReduser;
