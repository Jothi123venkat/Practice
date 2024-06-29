import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

const Prac = () => {
  const [todo, setTodo] = useState([]);


  useEffect(() => {
   const storedvalues =  localStorage.getItem("Todos");
     if(storedvalues){
         setTodo(JSON.parse(storedvalues))
     }
  }, [])
  

  const [input, setinput] = useState("");

  const handleadd = () => {
    const newTodos = [...todo,input]
    setTodo( newTodos);
    localStorage.setItem("Todos", JSON.stringify(newTodos))
    setinput("");
  };

  const handledelete = (indexval)=>{
    const newTodos = todo.filter((_,a)=>a!==indexval)
     setTodo(newTodos)
     localStorage.setItem("Todos", JSON.stringify(newTodos))
  }

  const handleEnter =(e)=>{
      if(e.key==="Enter"){
         handleadd()
      }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          onKeyPress={(e)=>handleEnter(e)}
        />
        <Button onClick={handleadd}>Add</Button>
      </div>

      <div>{todo.length ? todo.map((val,index) => <>
         <h1>{val}</h1>
         <Button onClick={()=>handledelete(index)} >Delete</Button>
      
      </>):"list is empty"}
      </div>
    </>
  );
};

export default Prac;
