import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  expect(removeExpense({ id: "123abc" }))
    .toEqual({
      type: "REMOVE_EXPENSE",
      id: "123abc"
    });
});

test("should setup edit expense action object", () => {
  expect(editExpense("123abc", { note: "new note value" }))
    .toEqual({
      type: "EDIT_EXPENSE",
      id: "123abc",
      updates: { note: "new note value" }
    });
});

test("should setup add expense object with passed in values", () => {
  expect(addExpense({
    description: "rent",
    note: "may",
    amount: 124500,
    createdAt: 10000
  }))
    .toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        description: "rent",
        note: "may",
        amount: 124500,
        createdAt: 10000
      }
    });
});

test("should setup add expense object without passed in values", () => {
  expect(addExpense())
    .toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        description: "",
        note: "",
        amount: 0,
        createdAt: 0
      }
    });
});