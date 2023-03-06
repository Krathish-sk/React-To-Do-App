import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const MainPageContext = createContext(null);

function MainPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  return (
    <MainPageContext.Provider
      value={{ username, setUsername, email, setEmail }}
    >
      <Login />
      <User />
    </MainPageContext.Provider>
  );
}

export default MainPage;
