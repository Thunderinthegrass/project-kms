import React from "react";
import s from "./Users.module.css";
import axios from 'axios';
import userImage from "../../assets/userImage.png"
// import User from "./User/User";

class Users extends React.Component {
  // debugger
  componentDidMount() {
    axios.get("http://localhost:5000/").then(response => {
      console.log(response.data.users);
      this.props.setUsers(response.data.users);
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
                    <img src={user.img !== "" ? user.img : userImage} alt="" className={s.userImg} />
                  </div>
                  <div className={s.userInfo}>
                    <div className={s.userInfoItem}><span className={s.punkt}>Имя: </span>{user.name}</div>
                    <div className={s.userInfoItem}><span className={s.punkt}>Возраст: </span>{user.characteristic.age}</div>
                    <div className={s.userInfoItem}><span className={s.punkt}>Страна: </span>{user.location.country}</div>
                    <div className={s.userInfoItem}><span className={s.punkt}>Город: </span>{user.location.locality}</div>
                    <div className={s.userInfoItem}><span className={s.punkt}>Адрес: </span>{user.location.address}</div>
                  </div>
                  {user.followed
                    ? <button className={s.followBtn} onClick={() => this.props.unFollow(user.id) } >Отписаться</button>
                    : <button className={s.followBtn} onClick={() => this.props.follow(user.id) } >Подписаться</button>
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