import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterExpensesByYear = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(expenseItem => expenseItem.date.getFullYear().toString() === filteredYear);

	let expensesContent = <p>No expenses found.</p>

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map(expenseItem => {
			return (
				<ExpenseItem
					key={expenseItem.id}
					title={expenseItem.title}
					amount={expenseItem.amount}
					date={expenseItem.date}
				/>
			)
		});
	}

	return (
		<Card className="expenses">
			<ExpensesFilter
				onChangeYear={filterExpensesByYear}
				selectedYear={filteredYear}
			/>
			{expensesContent}
			{/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
			{filteredExpenses.length > 0 && filteredExpenses.map(expenseItem => {
				return (
					<ExpenseItem
						key={expenseItem.id}
						title={expenseItem.title}
						amount={expenseItem.amount}
						date={expenseItem.date}
					/>
				);
			})} */}
		</Card>
	);
};

export default Expenses;
