import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(15);


 const handleIncrement = () =>{
   
     setCount(count+1)
 }
 
 const handleDecrement = () =>{
    if(count>0)
    setCount(count-1)
}

  return (
    <div>
    <button onClick={handleIncrement}>+</button>
    <p>Count : {count}</p>
    <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter