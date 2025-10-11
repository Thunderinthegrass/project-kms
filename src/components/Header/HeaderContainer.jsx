import React, { Component } from 'react'
import Header from './Header'
import s from "./HeaderContainer.module.css";
import { userData, userDataThunkCreator }from './../../redux/auth-reducer';
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
    this.props.userDataThunkCreator();
  }

  render() {
    return (
      <div className={s.headerContainer}>
        <Header authData={this.props.authData} />
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
  userDataThunkCreator,
  // userData
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps) (HeaderContainerComponent);

export default HeaderContainer;
