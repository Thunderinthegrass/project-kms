import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <div className="logo">
          <img className="logo-img" src="https://i.pinimg.com/736x/1c/73/dc/1c73dc41799f7411a0473102e3971230.jpg" alt="Логотип" />
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <div className="content">
        <div className="banner">
          {/* <img className="banner-img" src="https://zastavok.net/main/priroda/1473870210.jpg" alt="" /> */}
          <img className="banner-img" src="https://zastavok.net/main/priroda/163639060018.jpg" alt="" />
        </div>
        <div className="user"></div>
        <div className="posts-wrapper">
          <div className="new-post"></div>
          <div className="posts">
            <div className="post"></div>
            <div className="post"></div>
          </div>
        </div>
        Main content
      </div>
    </div>
  );
};

export default App;
