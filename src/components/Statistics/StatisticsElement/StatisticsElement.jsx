import PropTypes from 'prop-types';
import { StatisticsItem, StatisticsText, StatisticsBigText } from './StatisticsElement.styled'

export const StatisticsElement = ({  label, percentage }) => {
  return (
    <StatisticsItem>
      <StatisticsText>{label}</StatisticsText>
      <StatisticsBigText>{`${percentage}%`}</StatisticsBigText>
    </StatisticsItem>
  );
};

StatisticsElement.propTypes = {
  label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
};
