import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render ExpenseSummary correctly with 0 expenses", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary correctly with 1 expense", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1500} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary correctly with multiple expenses", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={2500} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary correctly with 1 filtered expense", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={2500} hiddenExpenses={1} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary correctly with multiple filtered expense", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={2500} hiddenExpenses={2} />);
  expect(wrapper).toMatchSnapshot();
});