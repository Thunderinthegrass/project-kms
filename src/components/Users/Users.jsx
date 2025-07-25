import React from "react";
import s from "./Users.module.css";
import axios from 'axios';
import userImage from "../../assets/userImage.png"
// import User from "./User/User";

const Users = (props) => {
  // debugger

  let getUsers = () => {
    if (props.users.length === 0) {

    axios.get("http://localhost:5000/").then(response => {
      console.log(response.data.users);
      props.setUsers(response.data.users);
    })
  }

    // props.setUsers([
    // {
    //   id: 1,
    //   followed: true,
    //   name: "Дед Вовка",
    //   img: "https://avatars.dzeninfra.ru/get-zen_doc/62191/pub_5d46ef138da1ce00af96680b_5d472c4ae6cb9b00ad5bdddb/scale_1200",
    //   location: {
    //     country: "Болото",
    //     locality: "Район бывшего поселка Кретово",
    //     address: "Здание универмага",
    //   },
    //   characteristic: {age: 72},
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   name: "Охотник Селиван",
    //   img: "https://avatars.dzeninfra.ru/get-zen_doc/1866101/pub_6503e42bffb3f010e7c18488_6503e889f277c224a7deeed4/scale_1200",
    //   location: {
    //     country: "Болото",
    //     locality: "Лесное урочище Волчья сыть",
    //     address: "Где ночь застанет",
    //   },
    //   characteristic: {age: 48},
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   name: "Владимир Петров",
    //   img: "",
    //   location: {
    //     country: "Болото",
    //     locality: "Заброшенный элеватор",
    //     address: "Здание семстанции",
    //   },
    //   characteristic: {age: 38},
    // },
    // {
    //   id: 4,
    //   followed: false,
    //   name: "Фёдор Пнёв",
    //   img: "",
    //   location: {
    //     country: "Болото",
    //     locality: "Заброшенный элеватор",
    //     address: "Здание МОБ",
    //   },
    //   characteristic: {age: 35},
    // },])
  }

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
                  ? <button className={s.followBtn} onClick={() => props.unFollow(user.id) } >Отписаться</button> 
                  : <button className={s.followBtn} onClick={() => props.follow(user.id) } >Подписаться</button>
                }
              </div> )
          }
        </div>
        <button className={s.addUsersBtn} onClick={getUsers}>Добавить пользователей</button>
      </div>
    </div>
  )
}

export default Users;