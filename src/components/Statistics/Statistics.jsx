import React from 'react';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import './Statistics.css';
import PropTypes from 'prop-types';

export const Statistics = ({ statsData }) => {
  return (
    <section className="statistics">
      {statsData && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
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
