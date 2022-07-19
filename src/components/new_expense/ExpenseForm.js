import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
	// const [enteredTitle, setEnteredTitle] = useState("");
	// const [enteredAmount, setEnteredAmount] = useState("");
	// const [enteredDate, setEnteredDate] = useState("");

	const [userInput, setUserInput] = useState({
		enteredTitle: "",
		enteredAmount: "",
		enteredDate: "",
	});

	const titleChangeHandler = (event) => {
		// setEnteredTitle(event.target.value);

		// The below is not the best/good option to update the state. Because React schedules the state updates and there could be a chance
		// that previous state values captured are obsolete.
		// setUserInput({
		//   ...userInput,
		//   enteredTitle: event.target.value
		// });

		// This is the safer way to ensure that the state update takes the latest values from the previous state
		setUserInput((prevState) => {
			return { ...prevState, enteredTitle: event.target.value };
		});
	};

	const amountChangeHandler = (event) => {
		// setEnteredAmount(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value,
		// });

		setUserInput((prevState) => {
			return { ...prevState, enteredAmount: event.target.value };
		});
	};

	const dateChangeHandler = (event) => {
		// setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value,
		// });

		setUserInput((prevState) => {
			return { ...prevState, enteredDate: event.target.value };
		});
	};

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
					/>
				</div>
				<div className="new-expense__actions">
					<button type="Submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
