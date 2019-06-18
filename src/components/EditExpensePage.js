import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import NotFoundPage from "./NotFoundPage";

export const EditExpensePage = ({ match, startEditExpense, startRemoveExpense, expense, history }) => {
  if (!expense) return (
    <NotFoundPage />
  );

  const formData = (expenseData) => {
    startEditExpense(match.params.id, expenseData);
    history.push("/");
  }

  const onRemove = () => {
    startRemoveExpense({ id: match.params.id });
    history.push("/");
  };

  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm
        formData={formData}
        expense={expense}
      />
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, expenseData) => dispatch(startEditExpense(id, expenseData)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);