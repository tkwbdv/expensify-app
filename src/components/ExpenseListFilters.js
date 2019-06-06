import React, { useState } from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from 'react-dates';

export const ExpenseListFilters = ({ filters, setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate }) => {
  const [focusedInput, setFocusedInput] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const onTextChange = (e) => {
    setTextFilter(e.target.value);
  }

  const onSortChange = (e) => {
    if (e.target.value === "amount") {
      sortByAmount();
    } else if (e.target.value === "date") {
      sortByDate();
    }
  }

  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={onTextChange}
      />
      <select
        value={filters.sortBy}
        onChange={onSortChange}
      >
        <option value="amount">Amount</option>
        <option value="date">Date</option>
      </select>
      <DateRangePicker
        startDate={filters.startDate}
        startDateId="your_unique_start_date_id"
        endDate={filters.endDate}
        endDateId="your_unique_end_date_id"
        onDatesChange={onDatesChange}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        hideKeyboardShortcutsPanel={true}
        noBorder={true}
        isOutsideRange={() => false}
        numberOfMonths={1}
        showClearDates={true}
      />
    </div>
  );
};


const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);