import React from 'react';
import style from './StatisticsItem.module.css';

export const StatisticsItem = ({ label, percentage }) => {
  const bgColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <li className={style.item} style={{ backgroundColor: `#${bgColor}` }}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};
