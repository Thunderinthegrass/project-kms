import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addNewPostText, addPost, getUserProfileThunkCreator} from "../../redux/profile-reduser";
import axios from "axios";
import { useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";

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
      // usersAPI.getUserProfile(this.props.match.params.userId).then((response) => {//если передается, то отправляем запрос и отрисовываем нужного пользователя

      //   this.props.setUserProfile(response);
      //   // console.log(response.data);
      //   console.log(this.props.match.params.userId);
      // })
      this.props.getUserProfileThunkCreator(this.props.match.params.userId);
    }
      // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`).then((response) => {

      //   this.props.setUserProfile(response.data);
      //   // console.log(response.data);
      //   console.log(this.props.match.params.userId);
      // })
  }

  render() {
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
  }
}

const mapDispatchToProps = {
    addNewPostText,
    addPost,
    getUserProfileThunkCreator
}

const ProfileContainerComponentWithUrl = withRouter(ProfileContainerComponent);

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerComponentWithUrl);

export default ProfileContainer;
