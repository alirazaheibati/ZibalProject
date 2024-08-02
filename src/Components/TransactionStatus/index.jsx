import PropTypes from "prop-types";

const statusMap = {
  1: "تراکنش موفق",
  0: "تراکنش ناموفق",
};

const getColorForStatus = (status) => {
  switch (status) {
    case 1:
      return "text-green-700 font-bold";
    case 0:
      return "text-red-700 font-bold";
  }
};

 const TransactionStatus = ({ status }) => {
  const color = getColorForStatus(status);
  return <span className={color}>{statusMap[status] || status}</span>;
};
export default TransactionStatus;

TransactionStatus.propTypes = {
  status: PropTypes.number.isRequired,
};


