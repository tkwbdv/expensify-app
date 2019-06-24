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
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          formData={formData}
          expense={expense}
        />
        <button className="button button--secondary" onClick={onRemove}>Remove Expense</button>
      </div>
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