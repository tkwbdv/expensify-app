import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render 0 expenses correctly", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render 1 expense correctly", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1500} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render 2 expenses correctly", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={2500} />);
  expect(wrapper).toMatchSnapshot();
});