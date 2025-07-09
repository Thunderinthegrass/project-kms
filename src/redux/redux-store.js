import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import newsReduser from "./news-reduser";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReduser,
  newsPage: newsReduser,
});

let store = createStore(reducers);

export default store;