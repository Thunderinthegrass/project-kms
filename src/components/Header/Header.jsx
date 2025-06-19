import React from "react";
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img
          className={s.logoImg}
          src="https://i.pinimg.com/736x/1c/73/dc/1c73dc41799f7411a0473102e3971230.jpg"
          alt="Логотип"
        />
      </div>
    </header>
  );
};

export default Header;
