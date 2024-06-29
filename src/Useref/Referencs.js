import React, { useRef, useState } from 'react'

const Referencs = () => {
  const [input,setInput]=useState();
  const inputref = useRef();

  const handlebuttonclick =()=>{
    // const getinput = [...input]
     setInput(inputref.current.value)
  }

  return (
    <div>
        <input type="text" ref={inputref}/>
        <button onClick={handlebuttonclick}>Submit</button>
        <h1>{input}</h1>
    </div>
  )
}

export default Referencs