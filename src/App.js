import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
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

const App = (props) => {
  // debugger
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state} />
        <div className="content">
          <Routes>
            <Route path="/" element={<ProfileContainer />} />
            <Route path="/Dialogs" element={<DialogsContainer />} />
            <Route path="/News" element={<NewsContainer />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/FriendPage" element={<FriendPage />} />
            <Route path="/Friends" element={<FriendsContainer />} />
            <Route path="/Users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
