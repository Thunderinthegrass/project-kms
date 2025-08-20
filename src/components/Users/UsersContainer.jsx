import { connect } from "react-redux";
import { follow, setUsers, unFollow, setCurrentPage, setTotalUsersCount, onChangeQuantityOnPage, onIsFetching } from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import preloader from "../../assets/loader.svg";
import Preloader from "../common/Preloader/Preloader";


class UsersContainerComponent extends React.Component {
  // debugger
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.onIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
        this.props.onIsFetching(false);

        console.log(response);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount - 27500);//приходит слишком много страниц, таким образом их количество уменьшается в 500 раз
        // this.props.setTotalUsersCount(response.data.totalCount);//приходят все данные
      })
    }
  }

  onPageChanged = (page) => {
    this.props.onIsFetching(true);
  console.log(this.props.users.length);
    this.props.setCurrentPage(page);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then((response) => {

      this.props.onIsFetching(false);

      console.log(this.props.pageSize);
      // console.log(response);
      this.props.setUsers(response.data.items);
    });
  }

  addNewQuantityUsers = (pageSize) => {
    this.props.onIsFetching(true);

    // this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${1}&count=${pageSize}`).then((response) => {

      this.props.onIsFetching(false);

      console.log(this.props.pageSize);
      console.log(response);
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users componentDidMount={this.componentDidMount}
              onPageChanged={this.onPageChanged}
              users={this.props.users}
              pageSize={this.props.pageSize}
              totalUsersCount={this.props.totalUsersCount}
              currentPage={this.props.currentPage}
              follow={this.props.follow}
              unFollow={this.props.unFollow}
              onChangeQuantityOnPage={this.props.onChangeQuantityOnPage}
              addNewQuantityUsers={this.addNewQuantityUsers}
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
  }
}

const mapDispatchToProps = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    onChangeQuantityOnPage,
    onIsFetching
  }

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);

export default UsersContainer;