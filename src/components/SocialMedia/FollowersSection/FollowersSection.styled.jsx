import styled from '@emotion/styled';

export const FollowersItem = styled.li`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #c5cede;
	padding: 10px;
`;

export const FollowersTitle = styled.span`
	color: ${p => p.theme.colors.secondary};
	font-size: ${p => p.theme.fontSizes.s};
	font-family: ${p => p.theme.fonts.body};
	font-weight: ${p => p.theme.fontWeights.subtitle};
`;

export const FollowersStats = styled.span`
	font-weight: 700;
`;