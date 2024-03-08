import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Taskprops = () => {
  const { handleSubmit, register } = useForm();

  const navi = useNavigate();

  const onformsubmit = (data) => {
    console.log(data);

    navi("/gooo", { state: { name:data.name , num : data.MobileNumber} });
  };

  return (
    <div style={{ position: "absolute", top: "10px", left: "35%" }}>
      <h1>Login</h1>
      <form style={{ width: "400px" }} onSubmit={handleSubmit(onformsubmit)}>
        <div style={{ marginBottom: "5px" }}>
          <TextField
            fullWidth
            placeholder="Name"
            {...register("name")}
            name="name"
          />
        </div>
        <div>
          <TextField
            fullWidth
            placeholder="Mobile Number"
            name="MobileNumber"
            {...register("MobileNumber")}
          />
        </div>
        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: "10px" }}
          color="success"
          type="submit"
        >
          login
        </Button>
      </form>
    </div>
  );
};

export default Taskprops;
