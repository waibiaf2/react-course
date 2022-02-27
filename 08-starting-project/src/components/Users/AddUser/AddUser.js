import {useState} from "react";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

import classes from './AddUser.module.css';


const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredAge] = useState('');

    const nameChangeHandler = (e) => {
        setEnteredUserName(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const addUserHandler = (e) => {
        e.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            console.log('Username or age is empty');
            return
        }

        if (+enteredUserAge < 1) {
            return
        }

        console.log(enteredUserName, enteredUserAge);

        props.onAddNewUser({
            name: enteredUserName,
            age: enteredUserAge,
        });

        setEnteredUserName('');
        setEnteredAge('');
    };

    return (
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
    );
};

export default AddUser;
