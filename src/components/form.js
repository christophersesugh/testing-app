import { Box } from "@mui/material";
import React from "react";

export default function Form({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    onSubmit({
      username: username.value,
      password: password.value,
    });
  };
  return (
    <Box
      compoent="div"
      sx={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <br />
        <input type="text" id="username" />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input type="password" id="password" />
        <br />
        <button type="submit">submit</button>
      </form>
    </Box>
  );
}
