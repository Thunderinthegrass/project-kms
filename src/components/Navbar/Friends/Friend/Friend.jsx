import React from "react";
import s from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={s.friend}>
      <div className={s.imgWrapper}>
        <img className={s.friendImg} src={props.imgPath} alt="" />
      </div>
      <div className={s.friendName}>{props.name}</div>
    </div>
  );
}

export default Friend;
