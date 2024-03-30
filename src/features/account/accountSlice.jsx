const intiatStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountReducer = (state = intiatStateAccount, action) => {
  //purpose of reducer is to calculte new state based on current state !
  //reducer are not allowed to update current state and nither they are allowerd to handle side effect cause by async functions
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdral":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      console.log(typeof action.payload.amount);
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose: "",
      };
    default:
      return state;
  }
};

export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

export function withdral(amount) {
  return { type: "account/withdral", payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount,
      purpose,
    },
  };
}

export function payLoan() {
  return { type: "account/payLoan" };
}

export default accountReducer;
