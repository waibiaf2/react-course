import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UserList/UsersList";

function App() {
    const initialUsers = [
        {id: 1, name: 'Andrew', age: 37},
        {id: 2, name: 'Waibi', age: 45}
    ]
    const [users, setUsers] = useState(initialUsers);

    const updateUsers = (userData) => {
        setUsers(prevState => {
            return [userData, ...prevState];
        });
    };

    return (
        <div>
            <AddUser onAddNewUser={updateUsers}/>
            <UsersList users={users}/>
        </div>
    );
}

export default App;
