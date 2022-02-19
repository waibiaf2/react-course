import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    //Captures values entered in the title field.
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
       /* setUserInput({
            ...userInput,
            enteredTitle: e.target.value
        })*/
      /*  setUserInput(prevState => {
            return {
                ...prevState,
                enteredTitle: e.target.value
            }
        })*/
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
       /* setUserInput({
            ...userInput,
            enteredAmount: e.target.value
        })*/
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        /*setUserInput({
            ...userInput,
            enteredDate: e.target.value
        })*/
    };

    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="">Amount</label>
                        <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="">Date</label>
                        <input type='date' min='2019-01-01' max='2022-12-13' onChange={dateChangeHandler}/>
                    </div>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Submit Expense</button>
            </div>
        </form>
    );

};

export default ExpenseForm;