import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => (
  <div>
    {expensesCount > 0 &&
      <p>
        Viewing {expensesCount} {expensesCount === 1 ? "expense" : "expenses"} totalling {numeral(expensesTotal / 100).format("$0,0.00")}
      </p>
    }
  </div>
);

const mapStateToProps = (state) => ({
  expensesCount: getVisibleExpenses(state.expenses, state.filters).length,
  expensesTotal: expensesTotal(getVisibleExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);