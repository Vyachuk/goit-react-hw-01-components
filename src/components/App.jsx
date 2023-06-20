import { Profile } from './Profile/Profile';
import userData from 'data/user.json';
import friendsData from 'data/friends.json';
import items from 'data/transactions.json';
import statsData from 'data/data.json';

import './App.css';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className="wrapper">
      <Profile {...userData} />
      <Statistics statsData={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory item={items} />
    </div>
  );
};
