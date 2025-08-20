import axios from 'axios'
import React, { Component } from 'react'
import Header from './Header'
import s from "./HeaderContainer.module.css";
import { userData }from './../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainerComponent extends Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true,}).then(response => {
      console.log(response.data);
      const data = response.data;
      this.props.userData(data.data.id, data.data.email, data.data.login, data.resultCode);
      console.log(this.props.authData);
    })
  }

  render() {
    return (
      <div className={s.headerContainer}>
        <Header {...this.props}/>
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
  userData,
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps) (HeaderContainerComponent);

export default HeaderContainer;
