import React, { useState } from 'react';
import styles from './ProfileStatus.module.scss';
import { usersAPI } from '../../../../api/api';
import { getStatusThunkCreator } from '../../../../redux/profile-reduser';

const ProfileStatus = (props) => {
  // debugger

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState('');

  // let getUserStatus = () => {
  //   usersAPI.getStatus(32562).then((response) => {console.log(response.data)});
  //   // setStatus(getStatusThunkCreator(32561))
  // }

  // let setUserStatus = () => {
  //   usersAPI.setStatus(props.status);
  // }

  const enabledEditMode = () => {
    setEditMode(true);
    setStatus(props.status);
  }
  const disabledEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const updateStateStatus = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
      {/* <span>{props.status}</span> */}
      {/* <span>{status}</span> */}
      {editMode ? <input autoFocus onBlur={disabledEditMode} value={status} onChange={updateStateStatus} /> : <span onDoubleClick={enabledEditMode}>{props.status}</span>}
      {/* <span onDoubleClick={enableEditMode}>{props.status}</span>
      <input value={status} /> */}
      {/* <button onClick={setUserStatus}>Отправить статус</button>
      <button onClick={getUserStatus}>Получить статус</button> */}
    </div>
  )
}

export default ProfileStatus;