import PropTypes from 'prop-types';

import { Box } from '../../../contents/Box';
import { FollowersItem, FollowersTitle, FollowersStats } from './FollowersSection.styled'


export const FollowersSection = ({stats}) => {
	return <Box as="ul"
	bg="#f2f8fc"
	display= "grid"
	gridTemplateColumns="repeat(3, 1fr)"
	p="0px"
	m="10px 0px 0px 0px">
	<FollowersItem>
		<FollowersTitle >Followers</FollowersTitle>
		<FollowersStats >{stats.followers}</FollowersStats>
	</FollowersItem>
	<FollowersItem>
		<FollowersTitle >Views</FollowersTitle>
		<FollowersStats >{stats.views}</FollowersStats>
	</FollowersItem>
	<FollowersItem>
		<FollowersTitle >Likes</FollowersTitle>
		<FollowersStats >{stats.likes}</FollowersStats>
	</FollowersItem>
	</Box> 
}

FollowersSection.propTypes = {
	stats:PropTypes.exact({
		followers:PropTypes.number.isRequired,
		views:PropTypes.number.isRequired,
		likes:PropTypes.number.isRequired,
	})
}
