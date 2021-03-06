import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [showForm, setShowForm] = useState(false);
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

    const isEditingHandler = (e) => {
        setShowForm(true);
    }

    const disableEditingHandler = () => {
        setShowForm(false);
    };



    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }

        /*Calls the prop from the parent component*/
        props.onSaveExpenseData(expenseData);

        //Clears input fields of the Expense form component
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        //console.log(expenseDate);

        setShowForm(false);
    };

    return (

        <div>
            {!showForm && <button onClick={isEditingHandler}>Add New Expense</button>}


            {showForm &&
                <form action="" onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label htmlFor="">Title</label>
                            <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="">Amount</label>
                            <input type='number' min="0.01" step="0.01" value={enteredAmount}
                                   onChange={amountChangeHandler}/>
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="">Date</label>
                            <input type='date' min='2019-01-01' max='2022-12-13' value={enteredDate}
                                   onChange={dateChangeHandler}/>
                        </div>
                    </div>
                    <div className="new-expense__actions">

                        <button type='submit' onClick={disableEditingHandler}>Cancel</button>
                        <button type='submit'>Submit Expense</button>
                    </div>
                </form>
            }

        </div>


    );
};

export default ExpenseForm;
