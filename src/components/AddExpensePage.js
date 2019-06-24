import React from "react";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export const AddExpensePage = ({ history, startAddExpense }) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add Expense</h1>
      </div>
    </div>
    <div className="content-container">
      <ExpenseForm
        formData={(expense) => {
          startAddExpense(expense);
          history.push("/");
        }}
      />
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense, dispatch))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);