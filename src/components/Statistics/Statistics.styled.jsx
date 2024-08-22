import styled from '@emotion/styled';


export const StatisticsList = styled.ul`
	display: flex;
	padding: 0px;
	margin: 0px;
	`;


export const StatisticsItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px 10px;
	width: 60px;
	background-color: ${p => p.backgroundColor};
	color: ${p => p.theme.colors.white};
`;

export const StatisticsName = styled.span`
	font-size: ${p => p.theme.fontSizes.m};
	font-family: ${p => p.theme.fonts.monospace};
`;

export const StatisticsPercentage = styled.span`
	font-size: ${p => p.theme.fontSizes.l};
	font-family: ${p => p.theme.fonts.heading};
`;

export const StatisticsTitle = styled.h2`
	background-color: ${p => p.theme.colors.white};
	margin: 0px;
	padding: 30px 0px;
	width: 100%;
	text-align: center;
	color:  ${p => p.theme.colors.secondary};
`;

