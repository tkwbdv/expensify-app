import moment from "moment";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../../actions/filters";

test("should create a textFilter action object with passed in value", () => {
  expect(setTextFilter("Test"))
    .toEqual({
      type: "SET_TEXT_FILTER",
      text: "Test"
    });
});

test("should create a textFilter action object without passed in value", () => {
  expect(setTextFilter())
    .toEqual({
      type: "SET_TEXT_FILTER",
      text: ""
    });
});

test("should create a sortByDate action object", () => {
  expect(sortByDate())
    .toEqual({
      type: "SORT_BY_DATE",
    });
});

test("should create a sortByAount action object", () => {
  expect(sortByAmount())
    .toEqual({
      type: "SORT_BY_AMOUNT",
    });
});

test("should create a startDate action object", () => {
  expect(setStartDate(moment(0)))
    .toEqual({
      type: "SET_START_DATE",
      startDate: moment(0)
    });
});

test("should create an endDate action object", () => {
  expect(setEndDate(moment(0)))
    .toEqual({
      type: "SET_END_DATE",
      endDate: moment(0)
    });
});