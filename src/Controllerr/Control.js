import { Button, FormHelperText, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const Control = () => {
  const { register, control, handleSubmit ,formState:{errors},getValues } = useForm();

 const onclicksubmit = (data)=>{
    console.log(data);
 }

  return (
    <div>
      <form onSubmit={handleSubmit(onclicksubmit)}>
      <Controller
  control={control}
  name="name"
   defaultValue="hi"
   rules={{
    required:"name is required",
     minLength:{
        value:2,
        message:"2 charcters",
     },
     maxLength:{
        value:4,
    message:"must have 4"
     }
   }}
   render={({field})=>
   <>
    <TextField
    {...field}
    label="name"
    sx={{width:"600px"}}
    />
   {errors.name && (
     <FormHelperText style={{color:"red"}}>{errors.name.message}</FormHelperText>
   )}
     
   </>
   }
/>


{/* {getValues("name") && ( */}
  <Controller
  control={control}
  name="Mobilenumber"

  rules={{
    required:"please enter a Value",
    minLength:{
      value:2,
      message:"need atleast 2 Values"
    },
    maxLength:{
       value:"10",
       message:"only 10 numbers Allowed"
    }
  }}

  render={({field})=>(
      <>
        <TextField
          {...field}
          name="Mobilenumber"
          sx={{width:"600px"}}
        />
  {errors.Mobilenumber && <FormHelperText style={{color:"red"}}> {errors.Mobilenumber.message}</FormHelperText>}

      </>
  )}
/>
{/* )} */}

<Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Control;
