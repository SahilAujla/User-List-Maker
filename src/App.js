import { React, useState } from "react";

import AddUser from "./Components/Users/AddUser";

import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addedUser = (input) => {
    setUsersList((prevList) => [input, ...prevList]);
  };

  return (
    <div>
      <AddUser onAddUser={addedUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
