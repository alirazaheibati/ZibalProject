
import PropTypes from 'prop-types';

export const AmountFormater = ({ amount }) => {
  if (amount === undefined || amount === null) {
    return <span>مقدار نامشخص</span>;
  }

  const formattedAmount = Number(amount).toLocaleString();
  
  return <span>{`${formattedAmount} ریال`}</span>;
};

AmountFormater.propTypes = {
  amount: PropTypes.number
};
