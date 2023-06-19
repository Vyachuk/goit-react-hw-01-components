import React from 'react';
import './FriendListItem.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-item">
      <span
        className="friend-status"
        style={{ backgroundColor: `${isOnline ? 'green' : 'red'}` }}
      ></span>
      <img
        className="friend-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friend-name">{name}</p>
    </li>
  );
};
