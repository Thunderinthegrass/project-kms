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

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path="/Dialogs" element={<Dialogs dialogsPage={props.state.dialogsPage} />} />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/FriendPage" element={<FriendPage />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
