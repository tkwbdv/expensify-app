import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, match, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  match = { params: { id: expenses[2].id } };
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      match={match}
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      expense={expenses[2]}
      history={history}
    />
  );
});

test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render NotFoundPage if expense id does not exist", () => {
  wrapper.setProps({ expense: undefined });
  expect(wrapper).toMatchSnapshot();
});

test("should handle startEditExpense", () => {
  wrapper.find("ExpenseForm").prop("formData")(expenses[2]);
  expect(startEditExpense).toHaveBeenLastCalledWith(match.params.id, expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handle startRemoveExpense", () => {
  wrapper.find("button").simulate("click");
  wrapper.find("ConfirmModal").prop("onRemove")();
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: match.params.id });
  expect(history.push).toHaveBeenLastCalledWith("/");
});