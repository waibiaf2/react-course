import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback"> No Items found</h2>
    }
    return <ul className="expenses-list">
        {
            props.items.length > 0 &&
            props.items.map(
                expense => <ExpenseItem
                    key={expense.id}
                    amount={expense.amount}
                    date={expense.date}
                    title={expense.title}/>
            )
        }

    </ul>;
};

export default ExpensesList;
