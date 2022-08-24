import PropTypes from 'prop-types';
import {
  StatisticsItem,
  StatisticsText,
  StatisticsTextBlack,
} from './ProfileStatistics.styled';

export const ProfileStatistics = ({ stats, text }) => {
  return (
    <StatisticsItem>
      <StatisticsText>{text}</StatisticsText>
      <StatisticsTextBlack>{stats}</StatisticsTextBlack>
    </StatisticsItem>
  );
};

ProfileStatistics.propTypes = {
  text: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
