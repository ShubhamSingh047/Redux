import { connect,useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// function BalanceDisplay({balance}){
//   return <div className="balance">{formatCurrency(balance)}</div>;
// }

function BalanceDisplay() {
  const balance = useSelector((store) => store.account.balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

//commented code is old ways

// const mapStateToProps = (state) => {
//   return {
//     balance: state.account.balance,
//   };
// };

// export default connect(mapStateToProps)(BalanceDisplay);
export default BalanceDisplay;
