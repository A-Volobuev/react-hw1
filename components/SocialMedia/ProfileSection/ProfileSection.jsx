import PropTypes from 'prop-types'

import { Box } from '../../../contents/Box';
import { ProfileAvatar, ProfileName, ProfileTag, ProfileLocation } from './ProfileSection.styled'


export const ProfileSection = ({username, tag, avatar, location, stats}) => {
	return <Box
		display="flex"
    alignItems="center"
		justifyContent= "center"
		flexDirection="column">
		<ProfileAvatar src={avatar} alt="User avatar"/>
		<ProfileName>{username}</ProfileName>
		<ProfileTag>@{tag}</ProfileTag>
		<ProfileLocation>{location}</ProfileLocation>
	</Box>
}

ProfileSection.propTypes = {
	username: PropTypes.string.isRequired,
	tag:PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
}


		// <div class="description">
    // 	<img
    // 	  src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
    // 	  alt="User avatar"
    // 	  class="avatar"
    // 	/>
    // 	<p class="name">Petra Marica</p>
    // 	<p class="tag">@pmarica</p>
    // 	<p class="location">Salvador, Brasil</p>
  	// </div>
	
