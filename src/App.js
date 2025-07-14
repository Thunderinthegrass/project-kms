import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Musik/Musiс";
import Settings from "./components/Settings/Settings";
import FriendPage from "./components/FriendPage/FriendPage";
import Friends from "./components/Navbar/Friends/Friends";

const App = (props) => {
  // debugger
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Profile store={props.store} />} />
            <Route path="/Dialogs" element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
            <Route path="/News" element={<News newsPage={props.state.newsPage} dispatch={props.dispatch} />} />
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
