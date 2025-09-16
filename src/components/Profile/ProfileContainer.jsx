import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addNewPostText, addPost, getUserProfileThunkCreator} from "../../redux/profile-reduser";
import { Navigate, useParams } from "react-router-dom";

function withRouter(WrappedComponent) {
  return (props) => {//проверяем, передается ли параметр userId, и если нет, то ничего не делаем.
    const match = {params: useParams()}; //Здесь каким-то образом появляется айдишник, переданный в NavLink при отрисовке
    console.log(match);
    return <WrappedComponent {...props} match={match} />;
  }
}

class ProfileContainerComponent extends React.Component {

  componentDidMount() {

    if (this.props.match.params.userId) {//проверяем, передается ли параметр userId, и если нет, то ничего не делаем.
      this.props.getUserProfileThunkCreator(this.props.match.params.userId);
    }
  }

  render() {
    console.log('авторизация ' + this.props.isAuth)
    // if (!this.props.isAuth) return <Navigate to={"/login"} />

    return (
      <Profile {...this.props}/>//если из контейнерной компоненты прокидываем все пропсы, которые в нее приходят, то можно писать так
    );
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    userData: state.profilePage.userData,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = {
    addNewPostText,
    addPost,
    getUserProfileThunkCreator
}

const authRedirectComponent = (props) => {//HOC
  if (!props.isAuth) return <Navigate to={"/login"} />
  return <ProfileContainerComponent {...props} />
}

// const ProfileContainerComponentWithUrl = withRouter(ProfileContainerComponent);//было
const ProfileContainerComponentWithUrl = withRouter(authRedirectComponent);//стало

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerComponentWithUrl);

export default ProfileContainer;
