import React from 'react';
import statsData from 'data/data.json';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import './Statistics.css';

export const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {statsData.map(type => (
          <StatisticsItem key={type.id} {...type} />
        ))}
      </ul>
    </section>
  );
};
