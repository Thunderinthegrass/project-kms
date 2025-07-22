import React from "react";
import s from "./Users.module.css";
// import User from "./User/User";

const Users = (props) => {
  // debugger
  // const user = props.users.map((user) => <User data={user} follow={props.follow} unFollow={props.unFollow} id={user.id} />)
  return (
    <div className={s.users}>
      <div className={s.container}>
        <div className={s.usersWrapper}>
          {/* {user} */}
          {
            props.users.map( user => 
              <div className={s.user} key={user.id} >
                <div className={s.userImgWrapper}>
                  <img src={user.img} alt="" className={s.userImg} />
                </div>
                <div className={s.userInfo}>
                  <div className={s.userInfoItem}><span className={s.punkt}>Имя: </span>{user.name}</div>
                  <div className={s.userInfoItem}><span className={s.punkt}>Возраст: </span>{user.characteristic.age}</div>
                  <div className={s.userInfoItem}><span className={s.punkt}>Страна: </span>{user.location.country}</div>
                  <div className={s.userInfoItem}><span className={s.punkt}>Город: </span>{user.location.locality}</div>
                  <div className={s.userInfoItem}><span className={s.punkt}>Адрес: </span>{user.location.address}</div>
                </div>
                {user.followed 
                  ? <button className={s.followBtn} onClick={() => props.unFollow(user.id) } >Отписан</button> 
                  : <button className={s.followBtn} onClick={() => props.follow(user.id) } >Подписан</button>
                }
              </div> )
          }
        </div>
        <button className={s.addUsersBtn}>Добавить пользователей</button>
      </div>
    </div>
  )
}

export default Users;