import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();

  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />);
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt filters correctly", () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const newText = "test";
  wrapper.find("input").simulate("change", { target: { value: newText } });
  expect(setTextFilter).toHaveBeenLastCalledWith(newText);
});

test("should sort by date", () => {
  wrapper.setProps({ filters: altFilters });
  wrapper.find("select").simulate("change", { target: { value: "date" } });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  wrapper.find("select").simulate("change", { target: { value: "amount" } });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const { startDate, endDate } = altFilters;
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focus changes", () => {
  const datePickerEl = "withStyles(DateRangePicker)";
  const calendarFocused = "startDate"
  expect(wrapper.find(datePickerEl).prop("focusedInput")).toBe(null);
  wrapper.find(datePickerEl).prop("onFocusChange")(calendarFocused);
  expect(wrapper.find(datePickerEl).prop("focusedInput")).toBe(calendarFocused);
});