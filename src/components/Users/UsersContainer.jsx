import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainerComponent extends React.Component {
  // debugger
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
      console.log(response);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount / 500);//приходит слишком много страниц, таким образом их количество уменьшается в 500 раз
    })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then((response) => {
      console.log(response);
      this.props.setUsers(response.data.items);
    })
  }

  render() {
    return (
      <Users componentDidMount={this.componentDidMount}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             pageSize={this.props.pageSize}
             totalUsersCount={this.props.totalUsersCount}
             currentPage={this.props.currentPage}
             follow={this.props.follow}
             unFollow={this.props.unFollow}
      />
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
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    }
}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);

export default UsersContainer;