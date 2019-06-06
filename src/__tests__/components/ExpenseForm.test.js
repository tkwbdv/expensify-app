import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm correctly with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  const errorElement = <p>Please provide description and amount.</p>;

  expect(wrapper.contains(errorElement)).toEqual(false);
  expect(wrapper).toMatchSnapshot();

  wrapper.find("form").simulate("submit", {
    preventDefault: () => { }
  });

  expect(wrapper.contains(errorElement)).toEqual(true);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const newValue = "New description"
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("input").at(0).simulate("change", {
    target: {
      value: newValue
    }
  });
  expect(wrapper.find("input").at(0).prop("value")).toBe(newValue);
});

test("should set note on textarea change", () => {
  const newNote = "New note";
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("textarea").simulate("change", {
    target: { value: newNote }
  });

  expect(wrapper.find("textarea").prop("value")).toBe(newNote);
});

test("should set amount if valid input", () => {
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("input").at(1).simulate("change", {
    target: { value: "23.50" }
  });

  expect(wrapper.find("input").at(1).prop("value")).toBe("23.50");
});

test("should not set amount if invalid input", () => {
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("input").at(1).simulate("change", {
    target: { value: "12.122" }
  });

  expect(wrapper.find("input").at(1).prop("value")).toBe("");
});

test("should call formData prop for valid form submission", () => {
  const { description, amount, createdAt, note } = expenses[0];
  const formDataSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} formData={formDataSpy} />);

  wrapper.find("form").simulate("submit", {
    preventDefault: () => { }
  });

  expect(wrapper.contains(<p>Please provide description and amount.</p>)).toEqual(false);
  expect(formDataSpy).toHaveBeenLastCalledWith({
    description,
    amount,
    createdAt: +createdAt,
    note
  });
});

test("should set new Date on date change", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);
  expect(wrapper.find("withStyles(SingleDatePicker)").prop("date")).toEqual(now);
});

test("should set calendar focus on change", () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({ focused });
  expect(wrapper.find("withStyles(SingleDatePicker)").prop("focused")).toBe(focused);
});