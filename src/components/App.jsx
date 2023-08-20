import { User } from 'components/User/User';
import userInfo from '../components/Data/user.json';
import { Statistics } from './Statistics/Statistics';
import statisticsInfo from '../components/Data/data.json';
import { FriendList } from './FriendList/FriendList';
import friendListInfo from '../components/Data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactionsInfo from '../components/Data/transactions.json';

const starTitle = '';
const friendTitle = '';
const transactionsTitle = '';


export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <User
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      <Statistics title={starTitle} stats={statisticsInfo} />
      <FriendList title={friendTitle} friends={friendListInfo} />
      <TransactionHistory
        title={transactionsTitle}
        transactions={transactionsInfo}
      />
    </div>
  );
};
