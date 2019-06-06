// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = startDate ? expense.createdAt >= +startDate : true;
    const endDateMatch = endDate ? expense.createdAt <= +endDate : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === "amount") return a.amount < b.amount ? 1 : -1;
    if (sortBy === "date") return a.createdAt < b.createdAt ? 1 : -1;
    return 0;
  });
};

export default getVisibleExpenses;