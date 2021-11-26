import { React, useState, Fragment } from "react";

import AddUser from "./Components/Users/AddUser";

import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addedUser = (input) => {
    setUsersList((prevList) => [input, ...prevList]);
  };

  return (
    <Fragment>
      <AddUser onAddUser={addedUser} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
