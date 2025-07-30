import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userImage from "../../../src/assets/images.png";

class Users extends React.Component {
  // debugger
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users?page=2&count=3").then((response) => {
      console.log(response);
      this.props.setUsers(response.data.items);
    })
  }

  render() {
  return (
    <div className={s.users}>
      <div className={s.container}>
        <div className={s.usersWrapper}>
          {
            this.props.users.map( user =>
              <div className={s.user} key={user.id} >
                <div className={s.userImgWrapper}>
                  <img src={user.photos.large !== null ? user.img : userImage} alt="" className={s.userImg} />
                </div>
                <div className={s.userInfo}>
                  <div className={s.userInfoItem}><span className={s.punkt}>Имя: </span>{user.name}</div>
                </div>
                {user.followed
                  ? <button className={s.followBtn} onClick={() => this.unFollow(user.id) } >Отписаться</button>
                  : <button className={s.followBtn} onClick={() => this.follow(user.id) } >Подписаться</button>
                }
              </div> )
          }
        </div>
        <button className={s.addUsersBtn}>Добавить пользователей</button>
      </div>
    </div>
  )
}
}

export default Users;