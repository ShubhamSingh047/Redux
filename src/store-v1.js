import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";

/* ---------------- Old ways to write redux thunk ! ---------------------

import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

//In redux we dont directly dispatch actions to retucer but to store

const rootReducer = combineReducers({
  account: accountSlice,
  customer: customerSlice,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
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

     -----------------New way toolkit-----------------
*/

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
