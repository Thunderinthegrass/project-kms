import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addNewPostText, addPost, setUserProfile} from "../../redux/profile-reduser";
import axios from "axios";

class ProfileContainerComponent extends React.Component {

  componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {

        this.props.setUserProfile(response.data.aboutMe);
        // console.log(response.data);
      })
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
    aboutUser: state.profilePage.aboutUser,
  }
}

const mapDispatchToProps = {
    addNewPostText,
    addPost,
    setUserProfile,
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerComponent);

export default ProfileContainer;
