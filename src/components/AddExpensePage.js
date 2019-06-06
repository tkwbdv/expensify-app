import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export const AddExpensePage = ({ history, addExpense }) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      formData={(expense) => {
        addExpense(expense);
        history.push("/");
      }}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);