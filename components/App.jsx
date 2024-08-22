import { Box } from '../contents/Box';
import user from '../data/user.json';
import { SocialMedia } from './SocialMedia/SocialMedia';
import data from '../data/data.json';
import { Statistics } from '../components/Statistics/Statistics';
import friends from '../data/friends.json';
import { FriendsList } from './FriendsList/FriendsList';
import  transaction from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return ( <Box>
  <SocialMedia user={user}></SocialMedia>
  <Statistics title="Upload stats" data={data}></Statistics>
  <FriendsList friends={friends}></FriendsList>
  <TransactionHistory transaction={transaction}></TransactionHistory>
  </Box>)
}