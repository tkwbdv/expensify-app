import React from "react";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export const AddExpensePage = ({ history, startAddExpense }) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      formData={(expense) => {
        startAddExpense(expense);
        history.push("/");
      }}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense, dispatch))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);