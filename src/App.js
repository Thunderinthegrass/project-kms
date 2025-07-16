import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import Music from "./components/Musik/Musiс";
import Settings from "./components/Settings/Settings";
import FriendPage from "./components/FriendPage/FriendPage";
import Friends from "./components/Navbar/Friends/Friends";
import NewsContainer from "./components/News/NewsContainer";

const App = (props) => {
  // debugger
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Profile store={props.store} />} />
            <Route path="/Dialogs" element={<DialogsContainer store={props.store} />} />
            <Route path="/News" element={<NewsContainer store={props.store} />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/FriendPage" element={<FriendPage />} />
            <Route path="/Friends" element={<Friends friendsPage={props.state.friendsPage} />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
