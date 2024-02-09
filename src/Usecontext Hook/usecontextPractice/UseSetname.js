import React, { useContext } from 'react'
import { Callcontext } from './CreateContext'
import { TextField } from '@mui/material'


const UseSetname = () => {
const{setName,name}=useContext(Callcontext)


    const handlenameChange = (e) =>{
        setName(e.target.value);
    }

  return (
    <div>
    <TextField
    // value={name}
     placeholder='enter the name'
     onChange={(e)=>handlenameChange(e)}
    />

    </div>
  )
}

export default UseSetname