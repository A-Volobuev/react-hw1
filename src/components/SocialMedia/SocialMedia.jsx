import { Box } from '../../contents/Box';
import { ProfileSection } from './ProfileSection/ProfileSection';
import { FollowersSection } from './FollowersSection/FollowersSection'

export const SocialMedia = ({user}) => {
	return (
		<Box
		bg = "#e7ecf2"
		p = "25px"
		display="flex"
		justifyContent="center">
			<Box
			width = "240px"
			bg = "white"
			pt="20px"
			borderRadius ="6px"
			>
				<ProfileSection {...user}></ProfileSection>
				<FollowersSection {...user}></FollowersSection>
			</Box>
		</Box>
	) 
} 