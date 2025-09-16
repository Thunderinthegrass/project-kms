import { connect } from "react-redux";
import { follow, unFollow, setCurrentPage, onChangeQuantityOnPage, onFollowingProgress, getUsersThunkCreator, unfollowThunkCreator, followThunkCreator } from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainerComponent extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageSize);
    this.props.setCurrentPage(page);
  }

  addNewQuantityUsers = (pageSize) => {
    this.props.getUsers(this.props.currentPage, pageSize);
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users 
              onPageChanged={this.onPageChanged}
              users={this.props.users}
              pageSize={this.props.pageSize}
              totalUsersCount={this.props.totalUsersCount}
              currentPage={this.props.currentPage}
              onChangeQuantityOnPage={this.props.onChangeQuantityOnPage}
              addNewQuantityUsers={this.addNewQuantityUsers}
              followingProgress={this.props.followingProgress}
              unfollowThunkCreator={this.props.unfollowThunkCreator}
              followThunkCreator={this.props.followThunkCreator}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
  }
}

const mapDispatchToProps = {
    follow,
    unFollow,
    setCurrentPage,
    onChangeQuantityOnPage,
    onFollowingProgress,
    getUsers: getUsersThunkCreator,
    unfollowThunkCreator,
    followThunkCreator
  }

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);

export default UsersContainer;