import PropTypes from 'prop-types';
import { StatisticsElement } from './StatisticsElement/StatisticsElement';
import { Box } from 'components/Box';
import { StatisticsTitle } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
  return (
    <Box as='section' maxWidth='500px' mx='auto' flexWrap='wrap'>
        {title ? <StatisticsTitle>{title}</StatisticsTitle> : null}
      <Box as="ul" display="flex" justifyContent='center'>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsElement key={id} label={label} percentage={percentage} />
        ))}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
