import PropTypes from 'prop-types'

import { Box } from '../../contents/Box';
import { StatisticsTitle, StatisticsList, StatisticsItem, StatisticsName, StatisticsPercentage } from './Statistics.styled'
import {getRandomHexColor} from '../../contents/color-function'

export const Statistics = ({data, title}) => {
	return (<Box
		bg = "bg"
		p = "25px"
		display="flex"
		alignItems="center"
		justifyContent= "center">
			<Box
			as="section"
			display="flex"
			flexDirection="column"
			alignItems="center"
			width="400px"
			borderRadius="10px"
			>
				{title && <StatisticsTitle>{title}</StatisticsTitle>}
				<StatisticsList>
					{data.map(({ id, label, percentage }) => (
							<StatisticsItem key={id} backgroundColor={getRandomHexColor()}>
								<StatisticsName >{label}</StatisticsName>
								<StatisticsPercentage>{percentage}%</StatisticsPercentage>
							</StatisticsItem>
						))}
			</StatisticsList>
			</Box>
	</Box>
	)
}

Statistics.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
})),
	title: PropTypes.string,
}