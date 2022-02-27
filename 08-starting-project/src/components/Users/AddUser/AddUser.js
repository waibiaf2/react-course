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
        if(enteredUserName=== '' && enteredUserAge < 1) {
            console.log('Username or age is empty');
        }

        console.log(enteredUserName, enteredUserAge);

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

export  default AddUser;
