import './TransactionHistory.css';
import PropTypes from 'prop-types';
import React from 'react';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';

export const TransactionHistory = ({ item }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {item.map(transaction => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
