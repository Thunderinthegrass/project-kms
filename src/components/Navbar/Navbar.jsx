import React from "react";
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <NavLink className={ ({isActive}) => isActive ? s.active : s.item } to="/">Profile</NavLink>
        </li>
        <li>
          <NavLink className={ ({isActive}) => isActive ? s.active : s.item } to="/Dialogs">Messages</NavLink>
        </li>
        <li>
          <NavLink className={ ({isActive}) => isActive ? s.active : s.item } to="/News">News</NavLink>
        </li>
        <li>
          <NavLink className={ ({isActive}) => isActive ? s.active : s.item } to="/Music">Music</NavLink>
        </li>
        <li>
          <NavLink className={ ({isActive}) => isActive ? s.active : s.item } to="/Settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
