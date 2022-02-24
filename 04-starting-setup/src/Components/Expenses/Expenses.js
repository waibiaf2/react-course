import {useState} from "react";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState(2019);
    const selectYearChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
        console.log('Expense.js')
        console.log(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter setYear={selectedYear} onSelectYear={selectYearChangeHandler}/>
            {
                props.items.map(
                    expense => <ExpenseItem
                        amount={expense.amount}
                        date={expense.date}
                        title={expense.title}/>
                )
            }
        </Card>
    );
}

export default Expenses;