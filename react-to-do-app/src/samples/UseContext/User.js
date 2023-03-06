import React, { useContext } from "react";
import { MainPageContext } from "./MainPage";

function User() {
  const { username, email } = useContext(MainPageContext);
  return (
    <div className="userContext">
      <h2 style={{ color: "white", paddingTop: "20px" }}>
        Username : {username}
      </h2>
      <h3 style={{ color: "white", paddingTop: "10px" }}>Email : {email}</h3>
    </div>
  );
}

export default User;
