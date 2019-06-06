import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: 2
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if invalid id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "109",
      description: "New",
      note: "",
      createdAt: 20000,
      amount: 123000
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("should edit expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: 1,
    updates: {
      description: "updated",
      amount: 9999
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([{ ...expenses[0], ...action.updates }, expenses[1], expenses[2]]);
});

test("should not edit expense if invalid id", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates: {
      description: "updated",
      amount: 9999
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});