import React from "react";
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
// debugger
  return (
    <div className={s.navContainer}>
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
    <Friends friends={props.state.friendsPage} />
    </div>
  );
};

export default Navbar;
