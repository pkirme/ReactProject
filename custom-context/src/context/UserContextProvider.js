import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const addUser = (newUser) => {
    setUser((prevUser) => [...prevUser, newUser]);
  };

  return (
    <UserContext.Provider value={{ user, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
