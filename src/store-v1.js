import { combineReducers, createStore } from "redux";
import accountSlice from "./features/account/accountSlice";
import customerSlice from "./features/customers/customerSlice";

//In redux we dont directly dispatch actions to retucer but to store

const rootReducer = combineReducers({
  account: accountSlice,
  customer: customerSlice,
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

export default store;
