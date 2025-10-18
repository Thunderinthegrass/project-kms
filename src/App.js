import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import Music from "./components/Musik/Musiс";
import Settings from "./components/Settings/Settings";
import FriendPage from "./components/FriendPage/FriendPage";
import NewsContainer from "./components/News/NewsContainer";
import FriendsContainer from "./components/Navbar/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import Login from "./components/Login/Login";
import LoginFinal from "./components/LoginFinal/LoginFinal";
// import AuthRedirectComponent from "./components/LoginFinal/LoginFinalContainer";

const App = (props) => {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar state={props.state} />
        <div className="content">
          <Routes>
            <Route path="/" element={<ProfileContainer />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/Dialogs" element={<DialogsContainer />} />
            <Route path="/News" element={<NewsContainer />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/FriendPage" element={<FriendPage />} />
            <Route path="/Friends" element={<FriendsContainer />} />
            <Route path="/Users" element={<UsersContainer />} />
            {/* <Route path="/Login" element={<Login />} /> */}
            <Route path="/LoginFinal" element={<LoginFinal />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
