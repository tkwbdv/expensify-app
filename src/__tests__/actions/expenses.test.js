import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import { addExpense, removeExpense, editExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref("expenses").set(expensesData).then(() => done());
});

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
  expect(addExpense(expenses[2]))
    .toEqual({
      type: "ADD_EXPENSE",
      expense: expenses[2]
    });
});

test("should add expenses to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "rent",
    amount: 109500,
    note: "may",
    createdAt: 1000
  };
  store.dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database
        .ref(`expenses/${actions[0].expense.id}`)
        .once("value")
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });;
});

test("should add expenses with defaults to database and store", (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0
  };
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once("value")
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });;
});

test("should setup SET_EXPENSES action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test("should fetch the expenses from firebase", (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "SET_EXPENSES",
        expenses
      });
      done();
    });
});

test("should remove expense from firebase", (done) => {
  const store = createMockStore({});
  const id = expenses[0].id

  store.dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id
      });
      return database.ref(`expenses/${id}`).once("value")
    }).then((snapshot) => {
      expect(snapshot.val()).toBe(null);
      done();
    });
});

test("should edit expense from firebase", (done) => {
  const store = createMockStore({});
  const { id, createdAt, note } = expenses[1]
  const updates = {
    description: "Car repair",
    amount: 15000
  };

  store.dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates
      });
      return database.ref(`expenses/${id}`).once("value")
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual({
        createdAt,
        note,
        ...updates
      });
      done();
    });
});