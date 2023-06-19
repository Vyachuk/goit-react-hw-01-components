import './TransactionItem.css';

import React from 'react';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
