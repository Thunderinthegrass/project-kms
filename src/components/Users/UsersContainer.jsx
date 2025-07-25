import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";

const mapStateToProps = (state) => {
  // debugger
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;