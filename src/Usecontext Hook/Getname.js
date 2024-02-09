import React, { useContext } from 'react'
import { Appcontext } from './Contextuse'
import { TextField } from '@mui/material';

const Getname = () => {

    const {setName}= useContext(Appcontext);
   

    const handlenamechange = (e) =>{
         setName(e.target.value)
        console.log(e.target.value);
    }


  return (
    <div>
        <TextField
         placeholder='Enter Name'
         onChange={(e)=>handlenamechange(e)}
        
        />
    </div>
  )
}

export default Getname