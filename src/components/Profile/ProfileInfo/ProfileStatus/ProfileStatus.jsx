import React from 'react';
import styles from './ProfileStatus.module.scss';

const ProfileStatus = (props) => {
  // debugger
  return (
    <div>
      <span>{props.status}</span>
      <input value={props.status} />
    </div>
  )
}

export default ProfileStatus;