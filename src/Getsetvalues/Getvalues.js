import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import Setvalue from "./Setvalue";


const Getvalues = () => {
  const { register, getValues,setValue } = useForm();

  const[name,setName]=useState("")

 const handlesetvalues =(e)=>{
    e.preventDefault()
    setValue("fullname","vijay")
    setValue("age","54")
 }

  return (
    <div>
      <form>
        <input type="text" name="fullname" {...register("fullname")} onChange={(e)=>setName(e.target.value)}/>
        {name.length>0 ? (<input type="text" name="age" {...register("age")} />):("")}
        {/* {console.log(name)} */}
        <button
          type="button"
          onClick={() => {
            const values = getValues(["fullname", "age"]);
            console.log(values);
          }}
        >
          getValues
        </button>

      <h1>Set</h1>

      <button onClick={handlesetvalues}>set</button>


    
      </form>
    </div>
  );
};

export default Getvalues;
