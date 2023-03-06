import React, { useContext } from "react";
import { MainPageContext } from "./MainPage";

function Login() {
  let divStyle = {
    paddingTop: "30px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    justifyContent: "center",
  };
  let inputStyle = {
    width: "200px",
    height: "30px",
  };

  const { setUsername, setEmail } = useContext(MainPageContext);
  return (
    <div className="loginContext" style={divStyle}>
      <input
        style={inputStyle}
        type="text"
        placeholder="Enter username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        style={inputStyle}
        type="text"
        placeholder="Enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </div>
  );
}

export default Login;
