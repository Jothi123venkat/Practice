import React from "react";
import { useLocation } from "react-router-dom";

const Propsget = () => {
  const location = useLocation();
  const name = location.state?.name || "";
  const num = location.state?.num || "";
  return (
    <div>
      <h1>{`HI ${name}`}</h1>
      <h1>{`your register mobile number is ${num}`}</h1>

    </div>
  );
};

export default Propsget;
