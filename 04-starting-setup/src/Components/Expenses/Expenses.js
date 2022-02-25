import {useState} from "react";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import expense from "./Expense";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState(2020);
    const selectYearChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
        console.log('Expense.js')
        console.log(selectedYear);
    };

    const filteredExpenses = props.items.filter((item) => {
        return item.date.getFullYear().toString() === selectedYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter setYear={selectedYear} onSelectYear={selectYearChangeHandler}/>
            {filteredExpenses.length === 0 && <p> No Items found</p>}
            {filteredExpenses.length > 0 &&
                filteredExpenses.map(
                    expense => <ExpenseItem
                        key={expense.id}
                        amount={expense.amount}
                        date={expense.date}
                        title={expense.title}/>
                )
            }
        </Card>
    );
}

export default Expenses;
/*
* Make the filter work
* when a year is selected show only items for that year.
* use filter method;
*
*
*
*
*
* */
