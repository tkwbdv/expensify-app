import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";
import NotFoundPage from "./NotFoundPage";

export const EditExpensePage = ({ match, editExpense, removeExpense, expense, history }) => {
  if (!expense) return (
    <NotFoundPage />
  );

  const formData = (expenseData) => {
    editExpense(match.params.id, expenseData);
    history.push("/");
  }

  const onRemove = () => {
    removeExpense({ id: match.params.id });
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
  editExpense: (id, expenseData) => dispatch(editExpense(id, expenseData)),
  removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);