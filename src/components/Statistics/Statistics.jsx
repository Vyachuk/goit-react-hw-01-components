import React from 'react';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ statsData }) => {
  return (
    <section className={style.statistics}>
      {statsData && <h2 className={style.title}>Upload stats</h2>}

      <ul className={style.statList}>
        {statsData.map(type => (
          <StatisticsItem key={type.id} {...type} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
