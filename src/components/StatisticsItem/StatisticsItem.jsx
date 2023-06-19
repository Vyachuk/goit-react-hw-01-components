import React from 'react';
import './StatisticsItem.css';

export const StatisticsItem = ({ label, percentage }) => {
  const bgColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <li className="item" style={{ backgroundColor: `#${bgColor}` }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
