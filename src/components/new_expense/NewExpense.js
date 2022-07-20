import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const [showAddNewExpenseButton, setShowAddNewExpenseButton] = useState(true);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		// onAddExpense is a prop set on the NewExpense custom component used in App.js
		props.onAddExpense(expenseData);
	};

	const addNewExpenseHandler = (event) => {
		setShowAddNewExpenseButton(!showAddNewExpenseButton);
	};

  const cancelSaveExpenseDataHandler = (event) => {
    setShowAddNewExpenseButton(!showAddNewExpenseButton);
  }

	if (showAddNewExpenseButton) {
		return (
			<div className="new-expense">
				<button onClick={addNewExpenseHandler}>Add New Expense</button>
			</div>
		);
	} else {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelSaveExpenseData={cancelSaveExpenseDataHandler} />
      </div>
    );
	}
};

export default NewExpense;
