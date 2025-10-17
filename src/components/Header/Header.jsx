import React from "react";
import s from './Header.module.scss';
import { NavLink } from "react-router-dom";
// import { logoutThunkCreator } from "../../redux/auth-reducer";

const Header = (props) => {
  // debugger;
  const logout = () => {
    logoutThunkCreator()
  }
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img
          className={s.logoImg}
          src="https://i.pinimg.com/736x/1c/73/dc/1c73dc41799f7411a0473102e3971230.jpg"
          alt="Логотип"
        />
      </div>
      {/* <NavLink {...(props.authData.isAuth ? {target: "_self"} : {target: "_blank"})} className={s.loginLink} to={`${props.authData.isAuth ? '/' : 'https://social-network.samuraijs.com/api/1.0/'}` }> */}
      <NavLink className={s.loginLink} to={`${props.authData.isAuth ? '/' : '/LoginFinal'}` }>
        {props.authData.isAuth ? props.authData.login : 'Login'}
      </NavLink>
      {/* {props.authData.isAuth ? <button onClick={logoutThunkCreator}>Выйти</button> : ''} */}
      {props.authData.isAuth ? <button onClick={props.logout}>Выйти</button> : <NavLink className={s.loginBtn} to={'/LoginFinal'}>Войти</NavLink>}
      {/* <span>{`${props.authData.isAuth}`}</span> */}
    </header>
  );
};

export default Header;
