import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

const ExpenseItem = (props) => {
	// One of the most important react "hook". React hooks start with "use"
	// useState always returns an array with 2 elements. 1st element is the actual value with which it is called, the 2nd element is a function used
	// to update the value returned in 1st value
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		// The call to setTitle will not only update the props.title value but also calls this component function to update the DOM basically re-evaluate
		// JSX code inside the function.
		// Also it does not update the value right away. It schedules this update in some scheduler queue.
		setTitle('Updated');
		console.log(title)
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			{/* <button onClick={clickHandler}>Change Title</button> */}
		</Card>
	);
};

export default ExpenseItem;
