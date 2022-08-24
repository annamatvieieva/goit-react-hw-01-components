import PropTypes from 'prop-types';

export const StatisticsElement = ({  label, percentage }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{`${percentage}%`}</span>
    </li>
  );
};

StatisticsElement.propTypes = {
  label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
};
