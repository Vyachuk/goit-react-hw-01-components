import { Profile } from './Profile/Profile';
import userData from 'data/user.json';
import friendsData from 'data/friends.json';

import './App.css';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div className="wrapper">
      <Profile {...userData} />
      <Statistics />
      <FriendList friends={friendsData} />
    </div>
  );
};
