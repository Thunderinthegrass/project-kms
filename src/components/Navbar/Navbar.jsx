import React from "react";
import s from './Navbar.module.css';
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {/* <li>
          <Link className={s.item} to="/">Profile</Link>
        </li>
        <li>
          <Link className={s.item} href="/Dialogs">Messages</Link>
        </li> */}
        <li>
          <a href="/Dialogs">Dialogs</a>
        </li>
        <li>
          <a href="/">Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
