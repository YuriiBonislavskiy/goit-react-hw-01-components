import { User } from 'components/User/User';
import userInfo from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import statisticsInfo from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import friendListInfo from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactionsInfo from '../data/transactions.json';
import * as CONSTANS from 'constans';


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
      <Statistics title={CONSTANS.starTitle} stats={statisticsInfo} />
      <FriendList title={CONSTANS.friendTitle} friends={friendListInfo} />
      <TransactionHistory
        title={CONSTANS.transactionsTitle}
        transactions={transactionsInfo}
      />
    </div>
  );
};
