import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <navLink href="#">Profile</navLink>
        </li>
        <li>
          <navLink href="#">Messages</navLink>
        </li>
        <li>
          <navLink href="#">News</navLink>
        </li>
        <li>
          <navLink href="#">Music</navLink>
        </li>
        <li>
          <navLink href="#">Settings</navLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
