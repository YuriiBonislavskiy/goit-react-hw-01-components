import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from '../Utils/GetRandomHexColor.js';


export const Statistics = ({ title,  stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title ? title : "Upload stats"}</h2>
      <ul className={css.statlist}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            style={{ background: getRandomHexColor() }}
            key={id}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

