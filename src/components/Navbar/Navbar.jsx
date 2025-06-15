import React from "react";
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <navLink className={s.item} href="#">Profile</navLink>
        </li>
        <li>
          <navLink className={s.item} href="#">Messages</navLink>
        </li>
        <li>
          <navLink className={s.item} href="#">News</navLink>
        </li>
        <li>
          <navLink className={s.item} href="#">Music</navLink>
        </li>
        <li>
          <navLink className={s.item} href="#">Settings</navLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
