import { connect } from "react-redux";
import { follow, setUsers, unFollow, setCurrentPage, setTotalUsersCount, onChangeQuantityOnPage, onIsFetching } from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { getPageChange, getPageSize, getUsers } from "../../api/api";


class UsersContainerComponent extends React.Component {
  // debugger
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.onIsFetching(true);
      
      getUsers(this.props.currentPage, this.props.pageSize).then((data) => {//getUsers находится в api.js
        this.props.onIsFetching(false);

        // console.log(data);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount - 27500);//приходит слишком много страниц, таким образом их количество уменьшается в 500 раз
        // this.props.setTotalUsersCount(response.data.totalCount);//приходят все данные
      })
    }
  }

  onPageChanged = (page) => {
    this.props.onIsFetching(true);
  console.log(this.props.users.length);
    this.props.setCurrentPage(page);

    getPageChange(page, this.props.pageSize).then((data) => {//getPageChanges находится в api.js

      this.props.onIsFetching(false);

      // console.log(this.props.pageSize);
      // console.log(response);
      this.props.setUsers(data.items);
    });
  }

  addNewQuantityUsers = (pageSize) => {
    this.props.onIsFetching(true);

    // this.props.setCurrentPage(page);
    getPageSize(pageSize).then((data) => {//getPageSize находится в api.js

      this.props.onIsFetching(false);

      // console.log(this.props.pageSize);
      // console.log(data);
      this.props.setUsers(data.items);
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