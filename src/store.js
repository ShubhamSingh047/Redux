import { combineReducers, createStore } from "redux";

const intiatStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const intiatStateCustomer = {
  fullName: "",
  Id: "",
  createdAt: "",
};

//In redux we dont directly dispatch actions to retucer but to store

const accountReducer = (state = intiatStateAccount, action) => {
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
        loanPurpose: action.payload.purpose,
        balance: action.payload.amount + action.payload.amount,
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

const nameReducer = (state = intiatStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        Id: action.payload.Id,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  account: accountReducer,
  customer: nameReducer,
});

const store = createStore(rootReducer);
// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log("Hey Redux");
// console.log(store.getState());
// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 1000,
//     purpose: "Buy a car",
//   },
// });
// console.log(store.getState());

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdral(amount) {
  return { type: "account/withdral", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount,
      purpose,
    },
  };
}

function payload() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(500));
store.dispatch(withdral(200));
store.dispatch(requestLoan(500, "Buy a car"));
console.log(store.getState());
store.dispatch(payload());
console.log(store.getState());

const createCustomer = (fullName, Id) => {
  //we could have created Id inside reducer function but we should avoid creating side effects inside use reducer
  //reducer should be pure component becouse we have to keep it predicatable
  return {
    type: "customer/createCustomer",
    payload: { fullName, Id, createdAt: new Date().toISOString() },
  };
};

const updatingName = (fullName) => {
  //we could have created Id inside reducer function but we should avoid creating side effects inside use reducer
  //reducer should be pure component becouse we have to keep it predicatable
  return { type: "customer/updateName", payload: fullName };
};

store.dispatch(createCustomer("shubham", 1234));
console.log(store.getState());
