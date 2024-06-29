import React, { useState } from 'react'

const Add = () => {
 
  const[input,setInput]=useState();

  const[todo,setTodo]=useState([]);

  const handleclickadd =()=>{
    // setTodo([...todo,input])
    if(input.length > 0){
      setTodo((prev)=>[...prev,input])
      localStorage.setItem("Todos",todo)
      debugger
      setInput("")
    }
  
  }

  const handledelte =(index)=>{
      console.log(index);
      setTodo(prev=>prev.filter((_,a)=>a!==index))
  }

  const keypress = (e)=>{
     if(e.key==="Enter"){
       handleclickadd()
     }
  }

  return (
    <div>
     <div>
     <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}  onKeyPress={keypress} />
      <button onClick={(e)=>handleclickadd} >Add</button>
     </div>

   
     <div>
      {todo && todo.map((val,index)=>(
         <ul key={index}>
          <li>{val}</li>
      <button onClick={()=>handledelte(index)}>delete</button>

         </ul>
      ))}
     </div>
    </div>
  )
}

export default Add