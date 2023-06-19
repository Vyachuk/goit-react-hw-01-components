import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import React from 'react';
import './FriendList.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};
