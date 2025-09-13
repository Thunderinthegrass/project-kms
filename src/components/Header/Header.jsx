import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  // debugger;
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img
          className={s.logoImg}
          src="https://i.pinimg.com/736x/1c/73/dc/1c73dc41799f7411a0473102e3971230.jpg"
          alt="Логотип"
        />
      </div>
      <NavLink className={s.loginLink} to={`${props.authData.isAuth === 0 ? '/' : '/Music'}` }>
        {props.authData.isAuth === 0 ? props.authData.login : 'Login'}
      </NavLink>
    </header>
  );
};

export default Header;
