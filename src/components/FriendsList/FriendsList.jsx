import PropTypes from 'prop-types'


import { Box } from '../../contents/Box'
import { FriendsRegister, FriendsItem, FriendsStatus, FriendsImg, FriendsName } from './FriendsList.styled'

export const FriendsList = ({friends}) => {
	return (
	<Box>
		<FriendsRegister>
			{friends.map(({avatar, name, isOnline, id}) => (
				<FriendsItem key={id}>
				<FriendsStatus status={isOnline}></FriendsStatus>
				<FriendsImg src={avatar}/>
				<FriendsName >{name}</FriendsName>
			</FriendsItem>
			))}
		</FriendsRegister>
	</Box>
	) 
} 

FriendsList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
})),
}