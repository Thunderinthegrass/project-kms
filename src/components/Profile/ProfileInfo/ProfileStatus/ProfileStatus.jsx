import React, { useEffect, useState } from 'react';
import styles from './ProfileStatus.module.scss';

const ProfileStatus = (props) => {
  // debugger

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus(props.status);
    console.log("юзэффект сработал")
  }, [props.status])

  const enabledEditMode = () => {
    setEditMode(true);
    setStatus(props.status);
  }
  const disabledEditMode = () => {
    setEditMode(false);
    if (props.status !== status) {
      props.updateStatus(status);
      console.log('статус обновлен');
    } else {
        console.log('статус такой же, как и был');
    }
  }

  const updateStateStatus = (e) => {
    setStatus(e.currentTarget.value);
  }

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      props.updateStatus(e.target.value);
      setEditMode(false);
      console.log('статус обновлен');
    }
  }

  return (
    <div>
      {editMode ? <input className={styles.input} autoFocus onBlur={disabledEditMode} onKeyDown={onKeyDownHandler} value={status} onChange={updateStateStatus} /> : <span className={styles.span} onClick={enabledEditMode}>{props.status}</span>}
    </div>
  )
}

export default ProfileStatus;