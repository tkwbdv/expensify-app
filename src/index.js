import React from "react";
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import "normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 500, createdAt: 1566640800000 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 1000, createdAt: 1558727439695 }));
store.dispatch(addExpense({ description: "Electricity bill", amount: 1500, createdAt: 1560506400000 }));
store.dispatch(addExpense({ description: "Rent", amount: 2000, createdAt: 1552302000000 }));

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root'));
