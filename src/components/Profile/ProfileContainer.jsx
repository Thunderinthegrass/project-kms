import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addNewPostText, addPost, getStatusThunkCreator, getUserProfileThunkCreator, updateStatusThunkCreator} from "../../redux/profile-reduser";
import { useParams } from "react-router-dom";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

function withRouter(WrappedComponent) {
  return (props) => {//проверяем, передается ли параметр userId, и если нет, то ничего не делаем.
    const match = {params: useParams()}; //Здесь каким-то образом появляется айдишник, переданный в NavLink при отрисовке
    // console.log(match);
    return <WrappedComponent {...props} match={match} />;
  }
}

class ProfileContainerComponent extends React.Component {

  componentDidMount() {

    // if (this.props.match.params.userId) {//проверяем, передается ли параметр userId, и если нет, то ничего не делаем.//17.09.2025 закомментировал эту проверку. Зачем - см. в тетрадке
      // this.props.getUserProfileThunkCreator(this.props.match.params.userId);
    this.props.getUserProfileThunkCreator(this.props.match.params.userId);
    // }//17.09.2025 закомментировал эту проверку. Зачем - см. в тетрадке
    this.props.getStatusThunkCreator(this.props.match.params.userId, this.props.auth);
  }

  render() {
    // console.log('авторизация ' + this.props.isAuth);

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
    status: state.profilePage.status,
    auth: state.auth.isAuth
  }
}

const mapDispatchToProps = {
    addNewPostText,
    addPost,
    getUserProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
}

let composed = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  // withAuthRedirect
)

// let authRedirectComponent = withAuthRedirect(ProfileContainerComponent);//withAuthRedirect находится в hoc/withAuthRedirect, это контейнерный компонент

// const ProfileContainerComponentWithUrl = withRouter(authRedirectComponent);

// const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerComponentWithUrl);

// export default ProfileContainer;

export default composed(ProfileContainerComponent);
