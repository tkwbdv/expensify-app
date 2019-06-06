import filtersReducer from "../../reducers/filters";
import moment from "moment";

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};

test("should set filter text in the filters state", () => {
  const filtersState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filtersReducer(filtersState, { type: "SET_TEXT_FILTER", text: "e" });
  expect(state).toEqual({
    text: "e",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sort by amount in the filters state", () => {
  const filtersState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filtersReducer(filtersState, { type: "SORT_BY_AMOUNT" });
  expect(state).toEqual({
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sort by date in the filters state", () => {
  const filtersState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filtersReducer(filtersState, { type: "SORT_BY_DATE" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set start date in the filters state", () => {
  const filtersState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filtersReducer(filtersState, { type: "SET_START_DATE", startDate: moment(1000) });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment(1000),
    endDate: moment().endOf("month")
  });
});

test("should set end date in the filters state", () => {
  const filtersState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filtersReducer(filtersState, { type: "SET_END_DATE", endDate: moment(1000) });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment(1000)
  });
});

test("should return unchanged state", () => {
  const filtersState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filtersReducer(filtersState, { type: "@@INIT" });
  expect(state).toEqual(filtersState);
});

test("should return default state", () => {

  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual(filtersReducerDefaultState);
});