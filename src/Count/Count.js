import { Button } from "@mui/material";
import React, { useState } from "react";

const Count = () => {
  // useState returns an Array with Two elements
  // The current state value
  // The function that allows to update a state
  const [count, setCount] = useState(0);
  // Initialize state variable count with initial value 0 using useState hook

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };  

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button onClick={decrement}>-</Button>

      <h1>{count}</h1>
      <Button onClick={increment}>+</Button>
    </div>
  );
};

export default Count;
