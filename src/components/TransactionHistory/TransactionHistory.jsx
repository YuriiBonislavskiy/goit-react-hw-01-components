import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import capitalize from '../Utils/Capitalize.js';

export const TransactionHistory = ({ title, transactions }) => {
  return (
    <section className={css.transactionsContainer}>
      <h2 className={css.title}>{title ? title : 'Transaction History'}</h2>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, type, amount, currency }, index) => (
            <tr key={id} style={{background: (index % 2) && 'white'}}>
              <td>{capitalize(type,', ')}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  title: PropTypes.string,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
