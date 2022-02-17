import ExpenseItem from "./ExpenseItem";

function Expense(props) {
    return (
        <ExpenseItem
            amount={props.expense.amount}
            title={props.expense.title}
            date={props.expense.date}
        />
    )
}

export default Expense;