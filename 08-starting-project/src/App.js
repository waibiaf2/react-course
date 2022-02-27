import React from 'react';
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

function App() {
    const users = [
        {id:1, name: 'Andrew', age: 37},
        {id:2, name: 'Waibi', age: 45}
    ]

    return (
        <div>
            <AddUser/>
            <UserList users={users}/>
        </div>
    );
}

export default App;
