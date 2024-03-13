import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (user.length<0) return <div>Please Login</div>;
  return (
    <>
      <ul>
        {user.map((user, index) => (
          <li key={index}>
            {user.userName} - {user.password}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Profile;
