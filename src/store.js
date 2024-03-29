import { createStore } from "redux";

const intiatState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const reducer = (state = intiatState, action) => {
  //purpose of reducer is to calculte new state based on current state !
  //reducer are not allowed to update current state and nither they are allowerd to handle side effect cause by async functions
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdral":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        purpose: action.payload.purpose,
        balance: action.payload.amount + action.payload.amount,
      };
    case "account/payLoan":
      return { ...state, loan: 0, balance: state.balance - state.loan };
    default:
      return state;
  }
};

const store = createStore(reducer);
store.dispatch({ type: "account/deposit", payload: 500 });
console.log("Hey Redux");
console.log(store.getState());
store.dispatch({
  type: "account/requestLoan",
  payload: {
    amount: 1000,
    purpose: "Buy a car",
  },
});
console.log(store.getState());
