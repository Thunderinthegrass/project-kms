import React, { Component } from "react";
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
import { connect } from "react-redux";
// import { userDataThunkCreator } from "./redux/auth-reducer";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
// import { initialize } from "redux-form";
// import AuthRedirectComponent from "./components/LoginFinal/LoginFinalContainer";

class App extends Component {

componentDidMount() {
  // this.props.userDataThunkCreator();
  this.props.initializeApp()
}

  render() {

    console.log('перерисовка')
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
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
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const mapDispatchToProps = {
  initializeApp,
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;
