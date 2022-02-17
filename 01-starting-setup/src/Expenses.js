import Expense from "./Expense";
import Card from "./Card";

import './Expenses.css'
function Expenses(props) {
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