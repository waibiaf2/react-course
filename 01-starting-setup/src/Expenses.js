import Expense from "./Expense";

import './Expenses.css'
function Expenses(props) {
    return (
        <div className="expenses">
            <Expense expense={props.items[0]}/>
            <Expense expense={props.items[1]}/>
            <Expense expense={props.items[2]}/>
            <Expense expense={props.items[3]}/>
        </div>
    );
}

export default Expenses;