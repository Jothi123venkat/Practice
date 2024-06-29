import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Pract3 = () => {
  // debugger
  const [input, setInput] = useState();
  const [todo, setTodo] = useState([]);

  const { setValue, getValues } = useForm();

  const handleAdd = () => {
    setTodo((prev) => [...prev, input]);
    setInput("");
  };

  const handledelete = (indexval) => {
    setTodo((prev) => prev.filter((_, a) => a !== indexval));
  };

  const handleUpdate = (indexval) => {
    // debugger
    const newvalue = prompt("enter the value you want to update");
    if (newvalue) {
      // debugger
      setTodo((prev) =>
        prev.map((val, index) => (index === indexval ? newvalue : val))
      );
      // setTodo((prev)=>console.log(prev,"previous"))
      // all the values comes in prev
    }
  };

  const handlepress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div>
          <input
            onChange={(e) => setInput(e.target.value)}
            name="input"
            value={input}
            style={{ padding: "9px" }}
            onKeyDown={handlepress}
          />
        </div>
        <div>
          <Button variant="contained" onClick={handleAdd}>
            Add
          </Button>
        </div>
      </div>

      <div>
        {todo &&
          todo.map((val, index) => (
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <li>{val}</li>
              <Button onClick={() => handledelete(index)}>DEL</Button>
              <Button onClick={() => handleUpdate(index)}>Update</Button>
            </ul>
          ))}
      </div>
    </>
  );
};

export default Pract3;
