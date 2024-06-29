import { Button } from '@mui/material'
import React, { useState } from 'react'

const Method = () => {
 const[items,setItems]=useState([]);
 const[index,setIndex]=useState("")

 const handleAdditem  =(index)=>{
     const newitems  =[...items]
     console.log(newitems);
     newitems.push(items.length+1);
     setItems(newitems)
 }

 for (let index = 0; index < items.length; index++) {
    const element = items[index];
    console.log(element);
    
 }

 const hanldeindex = (index)=>{
    setIndex(index + 1)

 }

  return (
    <div >
        <div style={{display:"flex", justifyContent:"center",marginTop:"40px"}}>
        <Button variant='contained' onClick={handleAdditem}>Add item</Button>
        {`you clicked num ${index} `}
        </div>
 <div>
{items && items.map((val,index)=>(
  <ul>
    <li onClick={()=>hanldeindex(index)}>{val}</li>

  </ul>
))}
 </div>

    </div>
  )
}

export default Method