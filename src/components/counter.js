import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount((initialCount) => initialCount + 1);
  };

  const decrement = () => {
    setCount((initialCount) => initialCount - 1);
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
      <Typography variant="h3">Current count: {count}</Typography>
      <ButtonGroup>
        <Button onClick={increment}>increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </ButtonGroup>
    </Box>
  );
}
