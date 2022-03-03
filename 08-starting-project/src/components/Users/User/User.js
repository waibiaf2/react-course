import classes from './User.module.css';

const User = props => {
    return (
        <li>{props.user.name} ({props.user.age} years old)</li>
    );
};

export default User;
