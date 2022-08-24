import { StatisticsElement } from './StatisticsElement/StatisticsElement';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title ? <h2>{title}</h2> : null}
      <ul>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsElement key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
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
