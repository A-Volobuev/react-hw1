import styled from '@emotion/styled';

export const FriendsRegister = styled.ul`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
`;

export const FriendsItem = styled.li`
	width: 200px;
	list-style-type: none;
	display: flex;
	box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.52);
	padding: 5px 15px;
`; 

export const FriendsStatus = styled.span`
	width: 18px;
	height: 18px;
	border-radius: 50%;
	margin: auto 5px;
	background-color: ${p => p.status
		? p.theme.colors.green 
    : p.theme.colors.red};
`;

export const FriendsImg = styled.img`
	width:48px;
	height: 48px;
	border-radius: 15px;
`;

export const FriendsName = styled.p`
	padding: 0px 10px;
`;