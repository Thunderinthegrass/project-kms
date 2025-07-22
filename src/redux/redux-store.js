import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import newsReduser from "./news-reduser";
import friendsReduser from "./friends-reduser";
import usersReduser from "./users-reduser";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReduser,
  newsPage: newsReduser,
  friendsPage: friendsReduser,
  usersPage: usersReduser,
});

let store = createStore(reducers);

export default store;