/*React Imports
* ********************************/
import React, {useState} from "react";

/*Components
* ***************************/
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

/*Styles
* ********************************************************/
import './ExpenseItem.css';

/*Component Code
* *************************************************/
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log('expense item being re-evaluated by react');

    // let title = props.title;
    const clickHandler = () => {
        //using state updating function to update the title variable
        setTitle('Updated');
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">
                $ {props.amount}
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;