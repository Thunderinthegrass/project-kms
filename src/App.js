import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Musik/Musiс";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Profile profileData={props.state.profilePage} />} />
            <Route path="/Dialogs" element={<Dialogs dialogsData={props.state.dialogsPage} />} />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
