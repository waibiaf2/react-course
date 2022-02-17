import ExpenseItem from "./ExpenseItem";

const Expense = (props) => {
    return (
        <ExpenseItem
            amount={props.expense.amount}
            title={props.expense.title}
            date={props.expense.date}
        />
    )
}

export default Expense;