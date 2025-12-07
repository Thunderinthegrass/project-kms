import React, { Component } from 'react'
import Header from './Header'
import s from "./HeaderContainer.module.css";
import { logoutThunkCreator }from './../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainerComponent extends Component {
  componentDidMount() {
    // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true,}).then(response => {
    //   // console.log(response.data);
    //   const data = response.data;
    //   this.props.userData(data.data.id, data.data.email, data.data.login, data.resultCode);
    //   // console.log(this.props.authData);
    // })
    // usersAPI.getUserData().then(data => this.props.userData(data.data.id, data.data.email, data.data.login, data.resultCode))

    // this.props.userDataThunkCreator();//теперь это находится в App
  }

  render() {
    return (
      <div className={s.headerContainer}>
        {/* <Header authData={this.props.authData} logout={this.props.logoutThunkCreator} /> */}
        <Header />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
    
  }
}

const mapDispatchToProps = {
  // userDataThunkCreator,
  // userData,
  // logoutThunkCreator//это в auth-reducer
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps) (HeaderContainerComponent);

export default HeaderContainer;
