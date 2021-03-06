// This is our "Root" component. (or Home Component). Its the main component rendered inside the index.html
// All other custom components that we created are nested under App

// NOTE: Custom components name MUST start with a UPPER CASE character

import React, { useState } from 'react';

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new_expense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses(existingExpenses => [expense, ...existingExpenses]);
  };

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
