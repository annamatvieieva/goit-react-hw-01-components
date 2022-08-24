import PropTypes from 'prop-types';

export const ProfileStatistics = ({ stats, text }) => {
  return (
    <li>
      <span>{text}</span>
      <span>{stats}</span>
    </li>
  );
};

ProfileStatistics.propTypes = {
  text: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
