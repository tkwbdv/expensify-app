import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, startRemoveExpense, match, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  match = { params: { id: expenses[2].id } };
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      match={match}
      editExpense={editExpense}
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

test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("formData")(expenses[2]);
  expect(editExpense).toHaveBeenLastCalledWith(match.params.id, expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handle startRemoveExpense", () => {
  wrapper.find("button").simulate("click");
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: match.params.id });
  expect(history.push).toHaveBeenLastCalledWith("/");
});