import React, { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const userDetails = {
      username,
      password,
    };
    console.log("userDetails:", userDetails);
  };

  return (
    <div>
      <h3>Enter Username and Password</h3>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};
