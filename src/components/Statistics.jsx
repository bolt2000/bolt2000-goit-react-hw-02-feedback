import React from 'react';
import css from './Counter.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <div>
    <ul>
      <li className={css.Statistics_item}>good: {good}</li>
      <li className={css.Statistics_item}>neutral: {neutral}</li>
      <li className={css.Statistics_item}>bad: {bad}</li>
      <li className={css.Statistics_item}>total: {total}</li>
      <li className={css.Statistics_item}>positive feedback: {percentage}%</li>
    </ul>
  </div>
);

export default Statistics;
