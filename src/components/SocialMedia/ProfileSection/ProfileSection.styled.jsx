import styled from '@emotion/styled';

export const ProfileAvatar = styled.img`
	width: 110px;
	height: 110px;
	border-radius: 50%;
`;

export const ProfileName = styled.p`
	font-size: ${p => p.theme.fontSizes.m};
	font-weight: ${p => p.theme.fontWeights.bold};
	font-family: ${p => p.theme.fonts.heading};
	color: ${p => p.theme.colors.text};
	margin: 30px 0px 0px 0px;
`;

export const ProfileTag = styled.p`
	color: ${p => p.theme.colors.secondary};
	font-size: ${p => p.theme.fontSizes.s};
	font-family: ${p => p.theme.fonts.body};
	margin: 10px 0px 0px 0px;
`;

export const ProfileLocation = styled.p`
	color: ${p => p.theme.colors.secondary};
	font-size: ${p => p.theme.fontSizes.s};
	font-family: ${p => p.theme.fonts.body};
	margin: 10px 0px 0px 0px;
`;