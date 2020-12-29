import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.tableHead}>
          <th className={s.tableHeader}>Type</th>
          <th className={s.tableHeader}>Amount</th>
          <th className={s.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <tr className={idx % 2 === 0 ? s.even : s.odd} key={id}>
            <td className={s.type}>
              {type.slice(0, 1).toUpperCase() + type.slice(1).toLowerCase()}
            </td>
            <td className={s.amount}>{amount}</td>
            <td className={s.currency}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
