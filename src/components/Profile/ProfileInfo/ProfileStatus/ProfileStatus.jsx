import React, { useState } from 'react';
import styles from './ProfileStatus.module.scss';

const ProfileStatus = (props) => {
  // debugger

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState('');

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
      {editMode ? <input className={styles.input} autoFocus onBlur={disabledEditMode} value={status} onChange={updateStateStatus} /> : <span className={styles.span} onClick={enabledEditMode}>{props.status}</span>}
    </div>
  )
}

export default ProfileStatus;