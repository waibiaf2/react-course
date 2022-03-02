import {useState} from "react";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

import classes from './AddUser.module.css';
import ErrorModal from "../../UI/ErrorModal/ErrorModal";


const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = (e) => {
        setEnteredUserName(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const addUserHandler = (e) => {
        e.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: ' Please enter a valid name and age (non-empty valules)'
            });

            console.log('Username or age is empty');
            return
        }

        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0)'
            });
            return
        }

        console.log(enteredUserName, enteredUserAge);

        props.onAddNewUser({
            id: Math.random().toString(),
            name: enteredUserName,
            age: enteredUserAge,
        });

        setEnteredUserName('');
        setEnteredAge('');
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
            <Card className={classes.input}>
                <form action="" onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text" id="username"
                        value={enteredUserName}
                        onChange={nameChangeHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number" id="age"
                        value={enteredUserAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>

        </div>
    );
};

export default AddUser;
