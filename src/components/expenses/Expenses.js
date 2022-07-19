import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");
	
	const filterExpensesByYear = (selectedYear) => {
		console.log("In Expenses.js: Selected year = ", selectedYear);
		setFilteredYear(selectedYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				onChangeYear={filterExpensesByYear}
				selectedYear={filteredYear}
			/>
			{props.items.map((expenseItem) => {
				return (<ExpenseItem
					title={expenseItem.title}
					amount={expenseItem.amount}
					date={expenseItem.date}
				/>);
			})}
		</Card>
	);
};

export default Expenses;
