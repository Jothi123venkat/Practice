import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';


const MyGrid = () => {

    // xs, sm, md, lg, and xl
   const [todo,setTodo]=useState([]);
   const[input,setInput]=useState();

   const handleAdd = () => {
    setTodo((prev) => [...prev, input]);
    setInput("")
  };
  
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item  md={6} sm={12} lg={4} xs={12} >
          <h1> Todo</h1>
          <input type="text" onChange={(e)=>setInput(e.target.value)} />
          <Button onClick={handleAdd}>Add</Button>


        </Grid>
        <Grid item  md={6} sm={12} lg={4} xs={12}>
          <ul>
            {todo && todo.map((val,index)=>(
                <li key={index}>{val}</li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyGrid;
