import { Profile } from './Profile/Profile';
import userData from 'data/user.json';

import './App.css';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div className="wrapper">
      <Profile {...userData} />
      <Statistics />
    </div>
  );
};
