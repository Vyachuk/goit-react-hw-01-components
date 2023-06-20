import React from 'react';
import style from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.friendItem}>
      <span
        className={style.friendStatus}
        style={{ backgroundColor: `${isOnline ? 'green' : 'red'}` }}
      ></span>
      <img
        className={style.friendAvatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={style.friendName}>{name}</p>
    </li>
  );
};
