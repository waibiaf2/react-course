import User from "../User/User";
import Card from "../../UI/Card/Card";
import classes from './UserList.module.css'

const UserList = props => {


    return (
        <Card className={classes.users}>
            {
                props.users.map(user => <User name={user.name} age={user.age}/ id={user.id}>)
            }
        </Card>
    );
}

export  default UserList;
