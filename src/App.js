import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  let arr = {
    name1: "Александр",
    name2: "Федор",
    surname1: "Петров",
    surname2: "Пнев"
  }
  return (
    <div className="app-wrapper">
      <Header name='Александр' surname='Петров' />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
