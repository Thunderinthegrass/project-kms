import React from 'react';
import s from "./Users.module.css";
import userImage from "../../assets/images.png";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);//получаем количество страниц, если остаток - округляем в большую сторону

  let pages = [];//объявляем массив
  for (let i = 1; i <= pagesCount; i++) {//заполняем массив числами, каждоечисло - номер страницы и пушим их в массив
    pages.push(i);
  }

  // props.componentDidMount();

  return <div className={s.users}>
    {
      pages.map(page => {//отрисовываем кнопки
        return <button className={props.currentPage === page && s.selectedPage}
                       onClick={() => {props.onPageChanged(page)}}>
          {page}
        </button>
      })
    }
    <div className={s.container}>
      <div className={s.usersWrapper}>
        {
          props.users.map( user =>
            <div className={s.user} key={user.id} >
              <div className={s.userImgWrapper}>
                <img src={user.photos.large !== null ? user.img : userImage} alt="" className={s.userImg} />
              </div>
              <div className={s.userInfo}>
                <div className={s.userInfoItem}><span className={s.punkt}>Имя: </span>{user.name}</div>
              </div>
              {user.followed
                ? <button className={s.followBtn} onClick={() => props.unFollow(user.id) } >Отписаться</button>
                : <button className={s.followBtn} onClick={() => props.follow(user.id) } >Подписаться</button>
              }
            </div> )
        }
      </div>
      <button className={s.addUsersBtn}>Добавить пользователей</button>
    </div>
  </div>
}

export default Users;