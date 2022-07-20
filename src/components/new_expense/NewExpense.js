import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		// onAddExpense is a prop set on the NewExpense custom component used in App.js
		props.onAddExpense(expenseData);
    setIsEditing(false);
	};

	const addNewExpenseHandler = () => {
		setIsEditing(true);
	};

	const cancelSaveExpenseDataHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={addNewExpenseHandler}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={cancelSaveExpenseDataHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
