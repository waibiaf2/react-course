import classes from './User.module.css';

const User = props => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
        </div>
    );
};

export default User;
