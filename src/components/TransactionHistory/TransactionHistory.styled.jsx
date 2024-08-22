import styled from '@emotion/styled';

export const TransactionTable = styled.table`
	display: flex;
	flex-direction: column;
	border: 2px solid grey;
`;

export const TransactionTitle = styled.th`
	background-color:#00CED1;
	color: ${p => p.theme.colors.white};
	width: 180px;
	padding: 10px;
`;

export const TransactionItem = styled.td`
	width: 180px;
	padding: 10px;
	text-align: center;
`; 

export const TransactionLine = styled.tr`
/* Цвет для четных  */
	&:nth-child(even) {
    background-color: #B0E0E6;
  }
/* Цвет для нечетных  */
	&:nth-child(odd) {
    background-color: #E0FFFF; 
  }
`; 