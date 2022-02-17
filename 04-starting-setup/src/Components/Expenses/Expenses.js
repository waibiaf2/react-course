import Expense from "./Expense";
import Card from "../UI/Card";

import './Expenses.css'
const Expenses = (props) => {
    return (
        <Card className="expenses">
            <Expense expense={props.items[0]}/>
            <Expense expense={props.items[1]}/>
            <Expense expense={props.items[2]}/>
            <Expense expense={props.items[3]}/>
        </Card>
    );
}

export default Expenses;