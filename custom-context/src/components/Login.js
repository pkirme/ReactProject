import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { addUser } = useContext(UserContext);

  const onClickHandler = (e) => {
    e.preventDefault();
    addUser({ userName, password });
  };
  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />{" "}
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <button onClick={onClickHandler}>Submit</button>
    </>
  );
}

export default Login;
