import React from "react";
import s from "./User.module.css";

const User = (props) => {
  // debugger
  return (
    <div className={s.user}>
      <div className={s.userImgWrapper}>
        <img src={props.data.img} alt="" className={s.userImg} />
      </div>
      <div className={s.userInfo}>
        <div className={s.userInfoItem}><span className={s.punkt}>Имя: </span>{props.data.name}</div>
        <div className={s.userInfoItem}><span className={s.punkt}>Возраст: </span>{props.data.characteristic.age}</div>
        <div className={s.userInfoItem}><span className={s.punkt}>Страна: </span>{props.data.location.country}</div>
        <div className={s.userInfoItem}><span className={s.punkt}>Город: </span>{props.data.location.locality}</div>
        <div className={s.userInfoItem}><span className={s.punkt}>Адрес: </span>{props.data.location.address}</div>
      </div>
      {props.data.followed ? (
        <button className={s.followBtn} onClick={() => props.follow(props.id) } >Подписан</button>
      ) : (
        <button className={s.followBtn} onClick={() => props.unFollow(props.id) } >Отписан</button>
      )}
    </div>
  )
}

export default User;
