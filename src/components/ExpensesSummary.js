import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import getVisibleExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = ({ expenseCount, expensesTotal, hiddenExpensesCount }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const hiddenExpenseWord = hiddenExpensesCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>

          {!!hiddenExpensesCount && <div><h6 className="page-header__subtitle"><span>{hiddenExpensesCount}</span> {hiddenExpenseWord} hidden by filters</h6></div>}

          <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
          </div>
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  const hiddenExpensesCount = state.expenses.length - visibleExpenses.length;

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: expensesTotal(visibleExpenses),
    hiddenExpensesCount
  };
};

export default connect(mapStateToProps)(ExpensesSummary);