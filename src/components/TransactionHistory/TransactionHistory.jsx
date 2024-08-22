import PropTypes from 'prop-types'

import { Box } from '../../contents/Box'
import { TransactionTable, TransactionTitle, TransactionItem, TransactionLine} from './TransactionHistory.styled'

export const TransactionHistory = ({transaction}) => {
	return(
		<Box display="flex"
		justifyContent="center"
		mt="30px">
			<TransactionTable>
		<thead>
			<tr>
				<TransactionTitle>Type</TransactionTitle>
				<TransactionTitle>Amount</TransactionTitle>
				<TransactionTitle>Currency</TransactionTitle>
			</tr>
		</thead>
	
		<tbody>
			{transaction.map(({ id, type, amount, currency }) => (
				<TransactionLine key={id}>
				<TransactionItem>{type}</TransactionItem>
				<TransactionItem>{amount}</TransactionItem>
				<TransactionItem>{currency}</TransactionItem>
			</TransactionLine>
			))}
		</tbody>
	</TransactionTable>
	</Box>
	)
}

TransactionHistory.propTypes = {
	transaction: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
})),
}