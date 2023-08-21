import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { capitalize } from 'utils';

export const TransactionHistory = ({ title, transactions }) => {
  return (
    <section className={css.transactionsContainer}>
      {title && <h2 className={css.title}>{title}</h2>}
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
            <tr key={id} style={{ background: index % 2 && 'white' }}>
              <td>{capitalize(type, ', ')}</td>
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
