import React, { useState } from "react";

import moment from "moment";

import "react-dates/initialize";
import { SingleDatePicker } from 'react-dates';

const ExpenseForm = ({ formData, expense = {} }) => {
  const [description, setDescription] = useState(expense.description || "");
  const [amount, setAmount] = useState((expense.amount / 100) || "");
  const [note, setNote] = useState(expense.note || "");
  const [createdAt, setCreatedAt] = useState(moment(expense.createdAt) || moment());
  const [calendarFocused, setCalendarFocused] = useState(false);
  const [error, setError] = useState("");

  const onAmountChange = (e) => {
    let amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const onNoteChange = (e) => {
    const note = e.target.value;
    setNote(note);
  };

  const onDateChange = (createdAt) => {
    if (createdAt) {
      setCreatedAt(createdAt)
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      setError("Please provide description and amount.");
    } else {
      setError("");
      formData({
        description,
        amount: +(parseFloat(amount) * 100).toFixed(0),
        createdAt: +createdAt,  // momentObject -> unix timestamp
        note
      });
    }
  };


  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onFormSubmit}>
        <input
          placeholder="Description"
          autoFocus
          value={description}
          onChange={onDescriptionChange}
        />
        <input
          placeholder="Amount"
          type="text"
          value={amount}
          onChange={onAmountChange}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={onDateChange}
          focused={calendarFocused}
          onFocusChange={({ focused }) => setCalendarFocused(focused)}
          id="your_unique_id"
          noBorder={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          hideKeyboardShortcutsPanel={true}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={note}
          onChange={onNoteChange}
        />
        <input
          type="submit"
          value={expense.description ? "Update Expense" : "Create Expense"}
        />
      </form>
    </div >
  )
};

export default ExpenseForm;