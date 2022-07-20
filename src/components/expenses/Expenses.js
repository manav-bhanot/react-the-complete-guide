import React, { useState } from "react";

import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterExpensesByYear = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = props.items.filter(
		(expenseItem) => expenseItem.date.getFullYear().toString() === filteredYear
	);

	return (
		<li>
			<Card className="expenses">
				<ExpensesFilter
					onChangeYear={filterExpensesByYear}
					selectedYear={filteredYear}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</li>
	);
};

export default Expenses;
