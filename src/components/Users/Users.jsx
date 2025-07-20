import React from "react";
import s from "./Users.module.css";
import User from "./User/User";

const Users = (props) => {
  // debugger
  const users = props.users.users.map(user => <User name={user.name} />)

  return (
    <div className={s.users}>
      {users}
    </div>
  )
}

export default Users;